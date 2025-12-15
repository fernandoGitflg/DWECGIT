// Mostrar formulario de nueva empresa
function mostrarFormulario() {
    document.querySelector('.formulario').style.display = 'block';
    document.querySelector('.alerta').style.display = 'none';
  }
  
  // Guardar empresa (simulación)
  function guardarEmpresa() {
    const nombre = document.querySelector('.formulario input[placeholder="Nombre de la empresa *"]').value;
    if (!nombre) {
      alert("El nombre de la empresa es obligatorio");
      return;
    }
  
    // Simulación de guardado
    document.querySelector('.alerta').style.display = 'block';
  
    // Ocultar formulario después de 1 segundo
    setTimeout(() => {
      document.querySelector('.formulario').style.display = 'none';
    }, 1000);
  }
  
  // Añadir contacto dinámicamente
  function añadirContacto() {
    const contactosSection = document.querySelector('.contactos');
    const nuevo = document.createElement('div');
    nuevo.classList.add('contacto');
    nuevo.innerHTML = `
      <strong>Nuevo Contacto</strong><br>
      📞 +34 600 000 000<br>
      ✉ nuevo@empresa.com
    `;
    contactosSection.appendChild(nuevo);
  }
  
  // Registrar comunicación
  function nuevaComunicacion() {
    const comunicacionesSection = document.querySelector('.comunicaciones');
    const nueva = document.createElement('div');
    nueva.innerHTML = `
      <p>📞 Comunicación telefónica con Pedro Sánchez - 11/12/2025</p>
    `;
    comunicacionesSection.appendChild(nueva);
  }
  