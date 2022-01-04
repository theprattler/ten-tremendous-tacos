const generateManager = managerData => {
  return `
    <section>
    ${managerData
      .map(({ name, id, email, officeNumber }) => {
        return `
        <h2>Manager:${name}</h2>
        <h3>ID:${id}</h3>
        <h3>Email:${email}</h3>
        <h3>:Office Number:${officeNumber}</h3>
        `;
      })
    }
    </section>
  `;
};

const generateEngineer = engineerData => {
  if (!engineerData) {
    return '';
  }
  return `
    <section>
    ${engineerData
      .map(({ name, id, email, github }) => {
        return `
        <h2>Engineer:${name}</h2>
        <h3>ID:${id}</h3>
        <h3>Email:${email}</h3>
        <h3>GitHub:${github}</h3>
        `;
      })
    }
    </section>
  `;
};

const generateIntern = internData => {
  if (!internData) {
    return '';
  }
  return `
    <section>
    ${internData
      .map(({ name, id, email, school }) => {
        return `
        <h2>Intern:${name}</h2>
        <h3>ID:${id}</h3>
        <h3>Email:${email}</h3>
        <h3>School:${school}</h3>
        `;
      })
    }
    </section>
  `;
};

module.exports = templateData => {
  const { manager, engineer, intern } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Our Awesome Team!</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div>
        <h1>Our Awesome Team!</h1>
      </div>
    </header>
    <main>
      ${generateManager(manager)}
      ${generateEngineer(engineer)}
      ${generateIntern(intern)}
    </main>
  </body>
  </html>
  `;
};