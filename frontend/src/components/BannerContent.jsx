function MainContent() {
  return (
    <div
      style={{
        marginLeft: '6%',
        color: 'white',
        fontFamily: ' Didact Gothic,sans-serif',
        position: 'absolute',
      }}>
      <h1 style={{ fontSize: '80px', marginTop: '5%' }}>Paws Adoption</h1>

      <h4>Everyone can pass by,but not everyone can stop and help.</h4>
      <h1>Adopt,don't shop.</h1>
      <p style={{ marginRight: '66%' }}>
        We inspire and enpower communities to make difference in the lives of
        animals.Find your new best friend and give a pet a loving home.
      </p>
      <button
        class='btn btn-success btn-lg'
        style={{ height: '8%', width: '20%' }}>
        Find a home
      </button>
    </div>
  );
}

export default MainContent;
