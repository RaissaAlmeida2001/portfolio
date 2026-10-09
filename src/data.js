// ✿ Edite tudo aqui! Esse arquivo é o "cérebro" do seu portfólio ✿

export const perfil = {
  nome: 'Raíssa Almeida',
  nomeCompleto: 'Raíssa Almeida',
  titulo: 'analista de dados · dev front-end & back-end · automação',
  subtitulo: 'SQL Server · Power BI · Python · React · Node.js · ETL · Automação',
  bio: [
    'Bem-vinda(o) ao meu portfólio! ♡',
    'Sou Analista de TI e gosto de transformar dados em insights que apoiam decisões estratégicas e tornam processos mais eficientes.',
    'Trabalho com SQL Server para consultas e manipulação de dados, Power BI para desenvolver relatórios e dashboards interativos e Python e Power Automate para automatizar tarefas e otimizar processos. Também tenho experiência com SAP Business One e Salesforce, conectando tecnologia às necessidades do negócio.',
    'Atualmente, estou no 7º semestre de Análise e Desenvolvimento de Sistemas na Fatec Sorocaba, caminhando para a conclusão da graduação. Além da experiência em tecnologia, já atuei como professora de inglês e sou fluente no idioma, o que me permite colaborar com equipes multiculturais e explorar oportunidades internacionais.',
    'Meu objetivo é usar a tecnologia e os dados para transformar informações em soluções práticas, inteligentes e eficientes.',
    'Fique à vontade para explorar meus projetos! ♡',
  ],
  local: 'Sorocaba, SP ✿',
  humor: 'transformando dados em decisões ✨',
  status: 'aberta a oportunidades remotas',
  buscando: 'Dados · BI · Desenvolvimento · Automação',
  email: 'raissaalmeida.ti@gmail.com',
  redes: [
    { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/raissakalmeida/' },
    { nome: 'GitHub', url: 'https://github.com/RaissaAlmeida2001' },
  ],
}

// O que eu faço (vem do "Sobre" do LinkedIn)
export const servicos = [
  { titulo: 'Consultas & modelagem', descricao: 'Consultas e modelagem de dados em SQL Server.', icone: '🗄️', cor: '#ffd1e8' },
  { titulo: 'Dashboards & relatórios', descricao: 'Painéis em Power BI e relatórios no SAP Business One pra várias áreas da empresa.', icone: '📊', cor: '#e3d4ff' },
  { titulo: 'Pipelines ETL', descricao: 'Limpeza, tratamento e pipelines de dados, do sistema até o dashboard.', icone: '🧼', cor: '#d4f4ff' },
  { titulo: 'Automação', descricao: 'Automação de processos com Python, com mais agilidade e dados confiáveis.', icone: '🤖', cor: '#fff3c4' },
  { titulo: 'Front-end', descricao: 'Interfaces e sites com HTML, CSS, JavaScript e React — como este aqui ♡', icone: '🎀', cor: '#ffe0f0' },
  { titulo: 'Back-end', descricao: 'APIs e integrações com Node.js e Python, conectando sistemas e bancos de dados.', icone: '⚙️', cor: '#e0f7e9' },
]

// ✿ Meus projetinhos ✿
// Pra adicionar um projeto, copie um bloco { ... } e preencha.
// imagem: coloque o print na pasta /public e escreva '/nome-do-arquivo.png' (opcional)
// repo e demo: links do GitHub e do site no ar (opcionais, deixe '' se não tiver)
export const projetos = [
  {
    titulo: 'Portfólio Kawaii',
    descricao: 'Este site! Portfólio no estilo anos 2000 com livro de visitas, validação de CPF e muito glitter.',
    tags: ['React', 'JavaScript', 'CSS'],
    imagem: '',
    repo: '',
    demo: '',
    cor: '#ffd1e8',
  },
]

export const habilidades = [
  { grupo: 'dados & BI', itens: ['Análise de dados', 'Análise estatística', 'Visualização de dados', 'Limpeza de dados', 'Mineração de dados', 'Entrada de dados', 'Data warehouse', 'ETL', 'Power BI', 'Tableau', 'Python', 'R'] },
  { grupo: 'bancos de dados', itens: ['SQL Server', 'MySQL', 'MongoDB'] },
  { grupo: 'front-end', itens: ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Design'] },
  { grupo: 'back-end & automação', itens: ['Node.js', 'APIs REST', 'Postman', 'Automação de processos', 'Power Automate'] },
  { grupo: 'sistemas & suporte', itens: ['SAP Business One', 'Salesforce', 'Apex', 'Administração do Office 365', 'Suporte técnico', 'Serviços de TI', 'Sistemas operacionais'] },
  { grupo: 'ferramentas & métodos', itens: ['Excel', 'Word', 'PowerPoint', 'Outlook', 'Scrum'] },
  { grupo: 'inglês', itens: ['Inglês fluente', 'Tradução', 'Gramática da língua inglesa', 'Ensino de inglês (ESL/TESOL)'] },
]

export const experiencias = [
  {
    cargo: 'Analista de TI Jr.',
    empresa: 'FanTR',
    periodo: 'jul. 2025 – atual',
    local: 'Sorocaba, SP · presencial',
    resumo: 'Efetivada após o estágio, atuo com análise de dados, BI e gestão da plataforma Salesforce.',
    itens: [
      'Dashboards em Power BI pra acompanhar indicadores',
      'Consultas em SQL Server pra extração, limpeza e tratamento de dados',
      'Relatórios no SAP Business One pra diferentes áreas',
      'Administração do Salesforce: usuários, relatórios e automações',
      'Automação de processos manuais',
    ],
  },
  {
    cargo: 'Estagiária de TI',
    empresa: 'FanTR',
    periodo: 'out. 2024 – jul. 2025',
    local: 'Sorocaba, SP',
    resumo: 'Estágio com foco em banco de dados e SAP Business One.',
    itens: [
      'Gerenciamento de bancos SQL Server (consultas e manutenção)',
      'Suporte ao SAP Business One: configuração e resolução de problemas',
      'Configuração de sistemas e suporte técnico de TI',
    ],
  },
  {
    cargo: 'Transição de carreira',
    empresa: 'estudos em tecnologia',
    periodo: 'fev. 2023 – set. 2023',
    local: 'Sorocaba, SP',
    resumo: 'Do ensino de idiomas pra tecnologia: estudos em programação, banco de dados e análise de dados, até entrar na Fatec.',
    itens: [],
  },
  {
    cargo: 'Professora de inglês',
    empresa: 'Instituto Mindset',
    periodo: 'mai. 2021 – jan. 2023',
    local: '',
    resumo: 'Aulas de inglês do A1 ao C2 e preparação pro TOEFL.',
    itens: [
      'Acompanhamento do desempenho e adaptação do conteúdo pra cada aluno',
    ],
  },
  {
    cargo: 'Aprendiz assistente administrativa',
    empresa: 'TIM Brasil',
    periodo: 'ago. 2019 – mar. 2021',
    local: 'Sorocaba, SP',
    resumo: 'Primeiro contato com dados, no setor de data center.',
    itens: [
      'Acompanhamento do faturamento semanal e organização de dados pra relatórios',
      'Apoio às rotinas administrativas da área',
    ],
  },
]

export const formacao = [
  {
    curso: 'Análise e Desenvolvimento de Sistemas (CST)',
    instituicao: 'Fatec Sorocaba',
    periodo: 'jul. 2023 – jul. 2027',
  },
]

export const certificados = [
  {
    nome: 'Google Data Analytics Professional Certificate',
    emissor: 'Google · Coursera',
    data: 'jul. 2026',
    url: 'https://www.credly.com/badges/a5580f65-a77b-4b09-87f8-5fb9fbbe0d02/linked_in_profile',
  },
  {
    nome: 'Estatística não-paramétrica para a tomada de decisão',
    emissor: 'Universidade de São Paulo · Coursera',
    data: 'jul. 2026',
    url: 'https://www.coursera.org/account/accomplishments/records/TBH746QK2AB1',
  },
  {
    nome: 'Bootcamp React.js / Node.js (640 horas)',
    emissor: 'React, Node, MongoDB, MySQL, Bootstrap e APIs',
    data: '',
  },
  {
    nome: 'TOEIC — Test of English for International Communication',
    emissor: 'ETS',
    data: '',
  },
  // Você tem 7 certificados no LinkedIn — adicione os outros aqui ♡
]

// Eventos que participei ✿ (pra adicionar, copie uma linha)
export const eventos = [
  { icone: '🍉', titulo: 'Maratona SBC de Programação 2025 (ICPC)', texto: 'Voluntária na organização · Fatec Sorocaba' },
  { icone: '☁️', titulo: 'Salesforce: Agent Bots e IA', texto: 'Convidada pelo time de TI da FanTR · Campinas' },
  { icone: '💻', titulo: 'Maratonas de Programação Interfatecs', texto: 'Participações representando a Fatec Sorocaba' },
]

export const recadosIniciais = []
