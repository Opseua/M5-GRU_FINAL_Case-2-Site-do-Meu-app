async function minhaFuncao() {
    console.log("Primeira linha");
  
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    console.log("Segunda linha");
  }
  

  minhaFuncao()