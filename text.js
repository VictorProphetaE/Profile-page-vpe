// Criar uma string com o código HTML
var htmlCode = `
    <!-- About Me -->
        <div id="about-me" class="alldiv">
        <div class="container">
            <div>
            <img src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" class="profile_image"/>
            </div>
            <div>
            <h1>Olá, Eu sou Victor P. Erbano!</h1>
            <p>Formado em Bacharelado em Ciência da Computação pela UEMS, com pós-graduação em Inteligência Artificial e Aprendizado de Máquina pela PUC-Minas.</p>
            </div>
        </div>
        <button class="btn1" data-page="formacoes-complementares">Formações complementares</button>
        <button class="btn1" data-page="habilidades">Habilidades</button>
        <button class="btn1" data-page="objetivo">Objetivo</button>
        </div>

        <!-- Formações complementares -->
        <div id="formacoes-complementares" class="alldiv">
            <div class="container">
                <div class="btn-h2-container">
                <button class="btn2" data-page="about-me"><i class="fas fa-arrow-left"></i></button>
                <h2>Formações complementares</h2>
                </div>
                <ul>
                    <li>2023 - 2023: Back-end Application Development with Node.js and Express. (52h)<br>IBM, Nova York, Estados Unidos</li>
                    <li>2023 - 2023: Introduction to Web Development with HTML5, CSS3, and JavaScript. (50h)<br>IBM, Nova York, Estados Unidos</li>
                    <li>2023 - 2023: JavaScript Introduction. (40h)<br>World Wide Web Consortium, W3C, Cambridge, Estados Unidos</li>
                    <li>2023 - 2023: Python Basics for Data Science. (50h)<br>IBM, Nova York, Estados Unidos</li>
                    <li>2022 - 2022: CS50's Introduction to Artificial Intelligence with Python. (40h)<br>Harvard University, Cambridge, Estados Unidos</li>
                    <li>2022 - 2022: CS50's Web Programming with Python and JavaScript. (80h)<br>Harvard University, Cambridge, Estados Unidos</li>
                    <li>2018 - 2019: Curso de Inglês. (120h)<br>EF English Live, Brasil</li>
                    <li>2019 - 2019: Desenvolvimento Ágil com Java Avançado. (32h)<br>Instituto Tecnológico de Aeronáutica, São Jose Dos Campos, Brasil</li>
                    <li>2018 - 2018: Orientação a Objetos com Java. (50h)<br>Instituto Tecnológico de Aeronáutica, São Jose Dos Campos, Brasil</li>
                    <li>2016 - 2017: Extensão universitária em GPCA - Grupo de Pesquisa de Computação Aplicada - UEMS - Dourados. (680h)<br>Universidade Estadual de Mato Grosso do Sul, Dourados, Brasil</li>
                </ul>
            </div>
        </div>

        <!-- Habilidades -->
        <div id="habilidades" class="alldiv">
            <div class="container">
                <div class="btn-h2-container">
                <button class="btn2" data-page="about-me"><i class="fas fa-arrow-left"></i></button>
                    <h2>Habilidades</h2>
                <div>
                    <p>Além de possuir habilidades nas diversas linguagens de programação, como C/C++, Python, Java, Javascript e HTML, 
                    além de conhecimentos em bancos de dados MySQL e PostgreSQL, Análise de Dados e Engenharia de Dados.</p>
                </div>
                </div>
            </div>
        </div>

        <!-- Objetivo -->
        <div id="objetivo" class="alldiv">
            <div class="container">
                <div class="btn-h2-container">
                    <button class="btn2" data-page="about-me"><i class="fas fa-arrow-left"></i></button>
                    <h2>Objetivo</h2>
                <div>
                    <p>O maior objetivo é ampliar e solidificar meu conhecimento em áreas como Aprendizado de Máquina e Inteligência Artificial.</p>
                </div>
                </div>
            </div>
        </div>
              
    <!-- Skills -->
    <div id="skills" class="alldiv">
      <h2>Skills</h2>
      <div style="clear:both;"></div>

      <div class="all_skills">
        <div class="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"/>
            <h6>C</h6>
            <p>5 anos de experiência</p>
        </div>
        
        <div class="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"/>
            <h6>C++</h6>
            <p>4 anos de experiência</p>
        </div>

        <div class="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"/>
            <h6>Python</h6>
            <p>4 anos de experiência</p>
        </div>

        <div class="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"/>
          <h6>HTML</h6>
          <p>2 anos de experiência</p>
        </div>  

        <div class="skill">
          <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"/>
          <h6>JavaScript</h6>
          <p>2 anos de experiência</p>
        </div>  

        <div class="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"/>
          <h6>CSS</h6>
          <p>2 anos de experiência</p>
        </div>  
        
        <div class="skill">
          <img src="https://freepngimg.com/thumb/java/5-2-java-png-clipart.png"/>
          <h6>Java</h6>
          <p>3 anos de experiência</p>
        </div>

        <div class="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/>
          <h6>Node</h6>
          <p>1 ano de experiência</p>
        </div>

        <div class="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
            <h6>React</h6>
            <p>1 ano de experiência</p>
        </div>
      </div>
    </div>
          
  <!-- Projects -->
  <div class="alldiv" id="projects">
    <div class="projects">
      <h2>
        Projects
      </h2>
      <div style="clear:both;"></div>
      <div id="projects-container" class="projects-container">
        <div class="project-card">
          <h3>Websites</h3>
          <ul>
            <li>HTML, CSS, Django, Javascript, CSS, NodeJS, AJAX, JSON, APIs</li>
          </ul>
        </div>
        <hr>
        <div class="project-card">
          <h3>Desktop</h3>
          <ul>
            <li>Java, Python, C, C++</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  <div style="clear:both;"></div>
  
    <!-- Personal Projects -->
    <div class="alldiv" id="personprojects">
        <div class="personprojects">
            <h2>Personal Projects</h3>
        <div style="clear:both;"></div>
            <div class="project-card">
                <ul>
                    <li><a href="https://github.com/VictorProphetaE/Pos-graduacao">Aplicabilidade em aprendizado de máquina: com uma perspectiva de estratégias no processo de produção de leite</a></li>
                    <li><a href="https://github.com/VictorProphetaE/Faculdade-CG">Modelo de avião 3D voando</a></li>
                    <li><a href="https://github.com/VictorProphetaE/Faculdade-SO">Pequeno sistema operacional</a></li>
                    <li><a href="https://github.com/VictorProphetaE/Harvard-CS-50-AI">Harvard CS50's AI</a></li>
                    <li><a href="https://github.com/VictorProphetaE/Harvard-CS-50-Web">Harvard CS50's WEB</a></li>
                    <li><a href="https://www.youtube.com/watch?v=lJPKLNelPSU">Gerenciamento de Clínica</a></li>
                    <li><a href="https://github.com/VictorProphetaE/teste-cbc">Teste CBC</a></li>
                    <li><a href="https://github.com/VictorProphetaE/teste-digiliza">Teste Digiliza</a></li>
                    <li><a href="https://github.com/VictorProphetaE/Teste-Amais-Educacao">Teste Amais Educação</a></li>
                    <li><a href="https://github.com/VictorProphetaE/teste-cientista-de-dados-4tune">Teste Cientista de Dados 4tune</a></li>
                    <li><a href="https://github.com/VictorProphetaE/teste-digiliza">Teste Digitalsys Dev Django</a></li>
                    <li><a href="https://github.com/VictorProphetaE/chat-bot-teste-pos-graduacao">ChatBot</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div style="clear:both;"></div>
  `