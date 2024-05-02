const fn = ({ nome, ...rest }) => {
  console.log("nome ->", nome);
  console.log("rest ->", rest);
};

const myObj = {
  nome: "Chrystian",
};

// fn(myObj);

const myObj2 = {
  // nome: "Chrystian",
  cidade: "Curitiba",
  estado: "Paraná",
};

fn(myObj2);
