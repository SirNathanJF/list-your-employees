const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");

const srcDirectory = path.resolve(__dirname, "../src");

const generateHTML = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getPosition() === "Manager")
        .map(manager => generateManager(manager))
      );
      html.push(...employees
        .filter(employee => employee.getPosition() === "Engineer")
        .map(engineer => generateEngineer(engineer))
      );
      html.push(...employees
        .filter(employee => employee.getPosition() === "Intern")
        .map(intern => generateIntern(intern))
      );
    
      return generateIndex(html.join(""));
};

const generateManager = manager => {
  let template = fs.readFileSync(path.resolve(srcDirectory, "manager.html"), "utf8");
  template = replaceGenericPlaceholders(template, "name", manager.getName());
  template = replaceGenericPlaceholders(template, "position", manager.getPosition());
  template = replaceGenericPlaceholders(template, "email", manager.getEmail());
  template = replaceGenericPlaceholders(template, "id", manager.getID());
  template = replaceGenericPlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const generateEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(srcDirectory, "engineer.html"), "utf8");
    template = replaceGenericPlaceholders(template, "name", engineer.getName());
    template = replaceGenericPlaceholders(template, "position", engineer.getPosition());
    template = replaceGenericPlaceholders(template, "email", engineer.getEmail());
    template = replaceGenericPlaceholders(template, "id", engineer.getID());
    template = replaceGenericPlaceholders(template, "github", engineer.getGithub());
    return template;
};

const generateIntern = intern => {
    let template = fs.readFileSync(path.resolve(srcDirectory, "intern.html"), "utf8");
    template = replaceGenericPlaceholders(template, "name", intern.getName());
    template = replaceGenericPlaceholders(template, "position", intern.getPosition());
    template = replaceGenericPlaceholders(template, "email", intern.getEmail());
    template = replaceGenericPlaceholders(template, "id", intern.getID());
    template = replaceGenericPlaceholders(template, "school", intern.getSchool());
    return template;
}

const generateIndex = html => {
    const template = fs.readFileSync(path.resolve(srcDirectory, "index.html"), "utf8");
    return replaceGenericPlaceholders(template, "team", html);
}

const replaceGenericPlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
}

module.exports = generateHTML;

