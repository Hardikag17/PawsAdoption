from flask import Flask, jsonify, Response
from flask.globals import request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_restplus import Resource, Api
from werkzeug.security import generate_password_hash, check_password_hash
import os

from flask_sqlalchemy.model import Model

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL',
    'sqlite:///db/db.sqlite')

CORS(app)
db = SQLAlchemy(app)
api = Api(app)


class Post(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(80), nullable=False)
    url = db.Column(db.String(200), nullable=False)
    content = db.Column(db.String(500), nullable=False)

    def __repr__(self):
        return str(id)

    def asdict(self):
        return {
            'id': self.id,
            'username': self.username,
            'url': self.url,
            'content': self.content
        }


class User(db.Model):
    username = db.Column(db.String, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(500), nullable=False)

    def __repr__(self):
        return str(self.username)

    def asdict(self):
        return {
            'username': self.username,
            'name': self.name,
            'password': self.password,
        }


@api.route('/post')
class PostApi(Resource):

    def get(self):
        posts = Post.query.order_by(Post.id.desc()).limit(100).all()
        res = []
        for post in posts:
            res.append(post.asdict())
        return res

    def post(self):
        response = request.get_json() if request.is_json else request.form
        for arg in ['username', 'url', 'content']:
            if not response.get(arg):
                api.abort(400)

        if Post.query.filter_by(username=response['username'],
                                url=response['url'],
                                content=response['content']).first() is not None:
            api.abort(409)

        post = Post(username=response['username'],
                    url=response['url'],
                    content=response['content'])

        db.session.add(post)
        db.session.commit()
        return post.asdict()


@api.route('/user/<string:username>')
class CheckUserApi(Resource):

    def post(self, username):
        response = request.get_json() if request.is_json else request.form
        if not response.get('password'):
            return {'resp': False}

        post = Post.query.filter_by(username=username).first()
        if post is None:
            return {'resp': False}

        if check_password_hash(post.asdict()['password'], response.get('password')):
            res = post.asdict()
            res['resp'] = True
            return res
        else:
            return {'resp': False}


@api.route('/user')
class AddUserApi(Resource):

    def post(self):
        response = request.get_json() if request.is_json else request.form
        for arg in ['username', 'password', 'name']:
            if not response.get(arg):
                api.abort(400)

        if User.query.filter_by(username=response['username']).first() is not None:
            api.abort(404)

        user = User(username=response['username'],
                    password=generate_password_hash(
                        response['password'], 'sha256'),
                    name=response['name'])

        db.session.add(user)
        db.session.commit()
        return user.asdict()


if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', port=8081)
