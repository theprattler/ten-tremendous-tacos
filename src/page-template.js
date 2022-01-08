const generateManager = managerData => {
  return `
    <section class="card">
      <ul>
        <li>
          <h2 id="card-title-name">${managerData.name}</h2>
          <h2>${managerData.role}</h2>
        </li>
        <li class="card-list-data">
          <h3>ID: <span>${managerData.id}</span></h3>
        </li>
        <li class="card-list-data">
          <h3>Email: <span><a href="mailto:${managerData.email}">${managerData.email}</a></span></h3>
        </li>
        <li class="card-list-data">
          <h3>Office Number: <span>${managerData.officeNumber}</span></h3>
        </li>
      </ul>
    </section>
  `;
};

const generateEngineer = engineerData => {
  if (!engineerData) {
    return '';
  }
  return `
    <section class="card">
      <ul>
        <li>
          <h2 id="card-title-name">${engineerData.name}:</h2>
          <h2>${engineerData.role}</h2>
        </li>
        <li class="card-list-data">
          <h3>ID: <span>${engineerData.id}</span></h3>
        </li>
        <li class="card-list-data">
          <h3>Email: <span><a href="mailto:${engineerData.email}">${engineerData.email}</a></span></h3>
        </li>
        <li class="card-list-data">
          <h3>GitHub: <span><a href="https://www.github.com/${engineerData.github}">${engineerData.github}</a></span></h3>
        </li>
      </ul>
    </section>
  `;
};

const generateIntern = internData => {
  if (!internData) {
    return '';
  }
  return `
    <section class="card">
      <ul>
        <li>
          <h2 id="card-title-name">${internData.name}:</h2>
          <h2>${internData.role}</h2>
        </li>
        <li class="card-list-data">
          <h3>ID: <span>${internData.id}</span></h3>
        </li>
        <li class="card-list-data">
          <h3>Email: <span><a href="mailto:${internData.email}">${internData.email}</a></span></h3>
        </li>
        <li class="card-list-data">
          <h3>School: <span>${internData.school}</span></h3>
        </li>
      </ul>
    </section>
  `;
};

module.exports = templateData => {
  console.log(templateData);
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
      ${generateManager(templateData[0])}
      ${generateEngineer(templateData[1])}
      ${generateIntern(templateData[2])}
    </main>
  </body>
  </html>
  `;
};