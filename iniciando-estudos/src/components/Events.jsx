const Events = () => {
  const handleMyEvent = (e) => {
    console.log("Evento ativado!");
  };

  const renderSomething = (x) =>{
    if(x){
       return <h3>TRUE!</h3>
    }else{
       return <h3>FALSE!</h3>
    }
  }
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      {renderSomething(true)}
    </div>
  );
};

export default Events;
