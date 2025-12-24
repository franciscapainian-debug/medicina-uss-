/* === BASE DE DATOS DE LA MALLA === */
// Estructura: id (único), name (nombre visible), prereqs (array de ids necesarios)
// Nota: Para "Licenciatura" usaremos un código especial 'LICENCIATURA'

const curriculumData = [
    {
        semester: 1,
        subjects: [
            { id: "s1_bio_cel", name: "Biología Celular", prereqs: [] },
            { id: "s1_quim", name: "Química General y Orgánica", prereqs: [] },
            { id: "s1_fis", name: "Bases Físico-Matemáticas", prereqs: [] },
            { id: "s1_bases", name: "Bases y Fundamentos de la Medicina", prereqs: [] },
            { id: "s1_abp1", name: "Integración ABP I", prereqs: [] },
            { id: "s1_estr", name: "Estrategias para el Aprendizaje", prereqs: [] }
        ]
    },
    {
        semester: 2,
        subjects: [
            { id: "s2_biomol", name: "Biología Molecular y Genética", prereqs: ["s1_bio_cel"] },
            { id: "s2_bioq", name: "Bioquímica General", prereqs: ["s1_bio_cel", "s1_quim"] },
            { id: "s2_soporte", name: "Soporte Básico Vital y Primeros Auxilios", prereqs: ["s1_bio_cel"] },
            { id: "s2_hist", name: "Historia de la Medicina", prereqs: ["s1_bases"] },
            { id: "s2_morf1", name: "Morfología Integrada I", prereqs: ["s1_abp1"] },
            { id: "s2_abp2", name: "Integración ABP II", prereqs: ["s1_abp1"] },
            { id: "s2_antr", name: "Antropología", prereqs: [] }
        ]
    },
    {
        semester: 3,
        subjects: [
            { id: "s3_bioest", name: "Bioestadística y MBE", prereqs: [] },
            { id: "s3_micro", name: "Microbiología Médica", prereqs: ["s2_soporte", "s2_biomol"] },
            { id: "s3_fisio", name: "Fisiología Médica", prereqs: ["s2_biomol", "s2_morf1", "s2_bioq"] },
            { id: "s3_psico", name: "Psicología Aplicada", prereqs: ["s2_hist"] },
            { id: "s3_morf2", name: "Morfología Integrada II", prereqs: ["s2_morf1", "s2_biomol"] },
            { id: "s3_etica", name: "Ética", prereqs: ["s2_antr"] }
        ]
    },
    {
        semester: 4,
        subjects: [
            { id: "s4_fisiopat", name: "Fisiopatología Médica", prereqs: ["s3_fisio"] },
            { id: "s4_salud_pob", name: "Salud Poblacional", prereqs: ["s3_bioest"] },
            { id: "s4_morf3", name: "Morfología Integrada III", prereqs: ["s3_fisio", "s3_morf2"] },
            { id: "s4_rmc1", name: "Razonamiento Médico - Clínico I", prereqs: ["s3_fisio", "s3_morf2"] },
            { id: "s4_efi2", name: "Electivo de Formación Integral II", prereqs: [] } 
        ]
    },
    {
        semester: 5,
        subjects: [
            { id: "s5_semio1", name: "Semiología I", prereqs: ["s4_fisiopat", "s4_morf3", "s4_rmc1", "s1_bases"] },
            { id: "s5_patol", name: "Patología Médica", prereqs: ["s3_micro", "s4_morf3"] },
            { id: "s5_epid", name: "Epidemiología", prereqs: ["s4_salud_pob"] },
            { id: "s5_bioet", name: "Bioética", prereqs: ["s4_rmc1"] },
            { id: "s5_efi1", name: "Electivo de Formación Integral I", prereqs: ["s3_etica"] },
            { id: "s5_efi2b", name: "Electivo de Formación Integral II (Ciclo)", prereqs: [] } // Nota: Se repite nombre en malla original, asumo slot distinto
        ]
    },
    {
        semester: 6,
        subjects: [
            { id: "s6_semio2", name: "Semiología II", prereqs: ["s5_semio1", "s5_patol"] },
            { id: "s6_farma", name: "Farmacología General", prereqs: ["s5_patol"] },
            { id: "s6_metod", name: "Metodología de la Investigación", prereqs: ["s3_bioest"] },
            { id: "s6_salud_dig", name: "Salud Digital", prereqs: ["s5_semio1"] },
            { id: "s6_rmc2", name: "Razonamiento Médico - Clínico II", prereqs: ["s5_semio1", "s5_patol"] },
            { id: "s6_efi4", name: "Electivo de Formación Integral IV", prereqs: [] }
        ]
    },
    {
        semester: 7,
        subjects: [
            { id: "s7_med_int1", name: "Medicina Interna I", prereqs: ["s6_semio2", "s6_rmc2", "s3_micro"] },
            { id: "s7_cir1", name: "Cirugía I", prereqs: ["s6_semio2", "s6_rmc2", "s3_micro"] },
            { id: "s7_psiq1", name: "Psiquiatría I", prereqs: ["s6_semio2", "s6_rmc2", "s3_micro"] },
            { id: "s7_pueblos", name: "Salud Pueblos Originarios y Migrantes", prereqs: ["s6_rmc2"] }
        ]
    },
    {
        semester: 8,
        subjects: [
            { id: "s8_med_int2", name: "Medicina Interna II", prereqs: ["s7_med_int1"] },
            { id: "s8_cir2", name: "Cirugía II", prereqs: ["s7_cir1"] },
            { id: "s8_psiq2", name: "Psiquiatría II", prereqs: ["s7_psiq1"] },
            { id: "s8_legal", name: "Medicina Legal", prereqs: ["s7_pueblos"] }
        ]
    },
    {
        semester: 9,
        subjects: [
            { id: "s9_ped1", name: "Pediatría I", prereqs: ["s8_med_int2", "s8_psiq2", "s8_legal"] },
            { id: "s9_gine1", name: "Ginecología - Obstetricia I", prereqs: ["s8_med_int2", "s8_cir2", "s8_legal"] },
            { id: "s9_esp1", name: "Especialidades I", prereqs: ["s8_med_int2"] },
            { id: "s9_fam", name: "Medicina Familiar y Comunitaria", prereqs: ["s8_med_int2"] },
            { id: "s9_paliat", name: "Cuidados Paliativos", prereqs: ["s8_med_int2", "s8_cir2", "s8_psiq2", "s8_legal"] },
            { id: "s9_salud_pob", name: "Salud Poblacional Aplicada", prereqs: ["s8_legal"] }
        ]
    },
    {
        semester: 10,
        subjects: [
            { id: "s10_ped2", name: "Pediatría II", prereqs: ["s9_ped1"] },
            { id: "s10_gine2", name: "Ginecología - Obstetricia II", prereqs: ["s9_gine1"] },
            { id: "s10_esp2", name: "Especialidades II", prereqs: ["s9_fam", "s9_paliat"] },
            { id: "s10_urg", name: "Medicina de Urgencia y Trauma", prereqs: ["s9_ped1", "s9_gine1", "s9_paliat"] },
            { id: "s10_rmc3", name: "Razonamiento Médico - Clínico III", prereqs: ["s9_fam", "s9_paliat"] }
        ]
    },
    // INTERNADOS - Requieren Licenciatura (Sem 1-10 completos)
    {
        semester: 11,
        subjects: [
            { id: "s11_int_mi", name: "Internado Medicina Interna", prereqs: ["LICENCIATURA"] },
            { id: "s11_int_ped", name: "Internado Pediatría", prereqs: ["LICENCIATURA"] }
        ]
    },
    {
        semester: 12,
        subjects: [
            { id: "s12_int_sm", name: "Internado Salud Mental", prereqs: ["LICENCIATURA"] },
            { id: "s12_int_fam", name: "Internado Med. Familiar", prereqs: ["LICENCIATURA"] },
            { id: "s12_int_elec1", name: "Internado Electivo I", prereqs: ["LICENCIATURA"] }
        ]
    },
    {
        semester: 13,
        subjects: [
            { id: "s13_int_esp", name: "Int. Esp. Medicina Interna", prereqs: ["s11_int_mi", "s12_int_sm"] },
            { id: "s13_int_cir", name: "Int. Cirugía y Urología", prereqs: ["s11_int_mi"] },
            { id: "s13_int_elec2", name: "Internado Electivo II", prereqs: ["s11_int_ped", "s12_int_fam"] }
        ]
    },
    {
        semester: 14,
        subjects: [
            { id: "s14_int_gine", name: "Int. Ginecología y Obstetricia", prereqs: ["s13_int_esp", "s13_int_cir"] },
            { id: "s14_int_urg", name: "Int. Med. Urgencia y Trauma", prereqs: ["s11_int_mi", "s11_int_ped", "s13_int_cir", "s12_int_fam"] },
            { id: "s14_rmc4", name: "Razonamiento Médico - Clínico IV", prereqs: ["s13_int_esp", "s13_int_cir", "s13_int_elec2"] }
        ]
    }
];

// Estado de ramos aprobados (Set para búsqueda rápida)
let approvedSubjects = new Set();

// Mapa rápido para buscar nombres por ID
const subjectMap = {};
curriculumData.forEach(sem => sem.subjects.forEach(sub => subjectMap[sub.id] = sub.name));

/* === INICIALIZACIÓN === */
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderMalla();
});

/* === LÓGICA PRINCIPAL === */

function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';
    
    // Calcular porcentaje
    updateProgressUI();

    curriculumData.forEach(sem => {
        // Crear columna de semestre
        const col = document.createElement('div');
        col.className = 'semester-column';
        
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.textContent = `Semestre ${sem.semester}`;
        col.appendChild(title);

        // Crear tarjetas de ramos
        sem.subjects.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.textContent = sub.name;
            
            const isApproved = approvedSubjects.has(sub.id);
            const status = checkAvailability(sub); // { available: bool, missing: [] }

            if (isApproved) {
                card.classList.add('approved');
            } else if (!status.available) {
                // card.classList.add('locked'); // Opcional: cambio visual
            }

            // Evento Click
            card.onclick = () => toggleSubject(sub, status);
            
            col.appendChild(card);
        });

        container.appendChild(col);
    });
}

function checkAvailability(subject) {
    let missing = [];

    // Caso especial: Licenciatura (Todos los ramos sem 1-10)
    if (subject.prereqs.includes("LICENCIATURA")) {
        const isLicenciaturaReady = checkLicenciatura();
        if (!isLicenciaturaReady) missing.push("Ciclo Básico y Preclínico (Sem 1-10 completos)");
        return { available: missing.length === 0, missing };
    }

    // Caso normal
    subject.prereqs.forEach(preId => {
        if (!approvedSubjects.has(preId)) {
            missing.push(subjectMap[preId] || preId);
        }
    });

    return { available: missing.length === 0, missing };
}

function checkLicenciatura() {
    // Verificar que TODOS los ramos de semestres 1 a 10 estén aprobados
    for (let i = 0; i < 10; i++) { // índices 0-9 corresponden a semestres 1-10
        const semesterSubjects = curriculumData[i].subjects;
        for (let sub of semesterSubjects) {
            if (!approvedSubjects.has(sub.id)) return false;
        }
    }
    return true;
}

function toggleSubject(subject, status) {
    if (approvedSubjects.has(subject.id)) {
        // Desaprobar
        approvedSubjects.delete(subject.id);
        
        // Al desaprobar, debemos revisar recursivamente si rompe otros ramos futuros aprobados
        // (Opcional: Por ahora permitimos inconsistencia o simplemente el usuario lo ve visualmente)
        // Para simplificar UX, permitimos desmarcar, pero visualmente se bloquearán los hijos al re-renderizar.
        
    } else {
        // Intentar Aprobar
        if (!status.available) {
            showModal(status.missing);
            return;
        }
        approvedSubjects.add(subject.id);
    }
    
    saveProgress();
    renderMalla();
}

/* === UTILIDADES === */

function updateProgressUI() {
    let total = 0;
    let approved = 0;
    curriculumData.forEach(sem => {
        total += sem.subjects.length;
        sem.subjects.forEach(sub => {
            if (approvedSubjects.has(sub.id)) approved++;
        });
    });
    
    const percentage = Math.round((approved / total) * 100);
    document.getElementById('progress-text').textContent = `Avance: ${percentage}%`;
}

function showModal(missingList) {
    const list = document.getElementById('missing-prereqs-list');
    list.innerHTML = '';
    missingList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    
    const modal = document.getElementById('alert-modal');
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('alert-modal').classList.add('hidden');
}

/* === PERSISTENCIA (LOCALSTORAGE) === */

function saveProgress() {
    localStorage.setItem('medicinaProgress', JSON.stringify([...approvedSubjects]));
}

function loadProgress() {
    const saved = localStorage.getItem('medicinaProgress');
    if (saved) {
        approvedSubjects = new Set(JSON.parse(saved));
    }
}

function resetProgress() {
    if(confirm("¿Estás seguro de querer borrar todo el progreso?")) {
        approvedSubjects.clear();
        saveProgress();
        renderMalla();
    }
}

