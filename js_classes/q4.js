class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    renderForm(containerId) {
        const container = document.getElementById(containerId);
        let html = "<form id='dynamicForm'>";
        this.fields.forEach(f => {
            html += `<label>${f.label}</label><input type='${f.type}' id='${f.label}' /><br/>`;
        });
        html += "<button type='button' onclick='getFormData()'>Submit</button></form>";
        container.innerHTML = html;
    }
}

function getFormData() {
    const form = document.getElementById("dynamicForm");
    const data = {};
    [...form.elements].forEach(el => {
        if (el.type !== "button") data[el.id] = el.value;
    });
    console.log(data);
}
