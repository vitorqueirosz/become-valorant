import Knex from 'knex';


export async function seed(knex: Knex) {
    await knex('agents').insert([
        // {
        //     name: 'Omen', image: 'omen.svg', class: 'Controller', skills: JSON.stringify([
        //         'Paranóia: envia uma sombra etérea em linha reta, oculta visao e audio do inimigo', 
        //         'Caminhada Sombria:  Teletransporte a uma curta distância',
        //         'Capa Escura: Lança uma esfera etérea obscura de sombra em seu local final',
        //         'Nas sombras: Teleporte global, caso receba dano no casting o tp e cancelado'
        //     ])
        // },
        // {
        //     name: 'Jett', image: 'jett.svg', class: 'Duelist',  skills: JSON.stringify([
                
        //         'Explosão de nuvens: implanta uma nuvem de fumaça que obstrui a visão do inimigo',
        //         'Updraft: Propele você pelo ar',
        //         'Vento de cauda: percorre uma curta distância na direção que você deseja seguir',
        //         'Blade Storm: equipa o agente com várias facas de arremesso',
        //     ])
        // },
        // {
        //     name: 'Phoenix', image: 'phoenix.svg', class: 'Duelist',  skills: JSON.stringify([
        //         'Chama:  Uma parede de fogo que você pode curvar à medida que lança, cura o phoenix e causa dano no inimigo',
        //         'Bola curva: Um flashbang que você pode curvar rapidamente nos cantos.', 
        //         'Hothands: Uma granada molotov que cura você e causa dano de area aos inimigos',
        //         'Execute de volta: Depois do cast, você tem um curto período de tempo onde, se você morrer, voltará à vida e ao local de'
        //         ]),
        // },
        {
            name: 'Sova', image: 'sova.svg', class: 'Initiator',  skills: JSON.stringify([
                'Chama:  Implante um drone pilotável que possa disparar um dardo que revelará os inimigos atingidos',
                'Parafuso de choque: Dispare um raio explosivo que emite um pulso danoso de energia estática após o impacto', 
                'Parafuso Recon: Arco com parafuso de reconhecimento. Atire para frente, ativando-se e revelando a localização de inimigos próximos',
                'Fúria do Caçador: Dispare até três explosões mortais de energia que se espalham por todo o mapa'
                ]),
        },
        {
            name: 'Cypher', image: 'cypher.svg', class: 'Sentinel',  skills: JSON.stringify([
                'Armadilha:  Coloque um fio entre duas paredes. Inimigos desencadeantes são contidos e revelados por um curto período de tempo',
                'Gaiola cibernetica: Uma gaiola cibernética que cria uma zona que bloqueia a visão e diminui a velocidade dos inimigos', 
                'Câmera espiã: Coloque uma câmera remota, reative para visualizar o feed de vídeo. Ao clicar, é possível disparar um dardo rastreável',
                'Roubo Neural: Extraia informações do cadáver de um inimigo, revelando a localização de seus aliados vivos'
                ]),
        },
        {
            name: 'Raze', image: 'raze.svg', class: 'Duelist',  skills: JSON.stringify([
                'Boom Bot:  Soltará o bot, fazendo-o viajar numa linha reta no chão, ricocheteando nas paredes, perseguindo-os e explodindo caso atinja inimigos',
                'Conchas de tinta: Lança uma granada, que causa dano e cria sub-munições.', 
                'Blast Pack: Jogue um Blast Pack que grude nas superfícies. Após a implantação, refaça a capacidade de detonar e danificar',
                'Showstopper: Equipe um lançador de foguetes de uso único com a capacidade de dar um tiro nos inimigos'
                ]),
        },
        {
            name: 'Sage', image: 'sage.svg', class: 'Sentinel',  skills: JSON.stringify([
                'Orbe de Barreira:  Conjura uma parede grande e sólida',
                'Orbe de Lentidão: Lança uma esfera de radianita que entra em um campo lento após o impacto no solo', 
                'Orbe de Cura: Cure um aliado ou a si mesmo à saúde completa por alguns segundos',
                'Ressurreição: Alveje um cadáver amigável e reavive-os com a saúde total'
                ]),
        },
        {
            name: 'Viper', image: 'viper.svg', class: 'Controller',  skills: JSON.stringify([
                'Mordida de cobra:  Dispare um projétil que explode em uma poça de ácido prejudicial',
                'Nuvem de Veneno: Lance um emissor de gás que pode ser reativado para criar uma nuvem de fumaça venenosa', 
                'Tela Tóxica: Implante uma longa linha de emissores de gás que você pode reativar para criar uma parede alta de gás tóxico',
                'Vipers Pit: Emita uma nuvem tóxica maciça em uma grande área que dura enquanto o Viper permanecer dentro da nuvem'
                ]),
        },
        {
            name: 'Brimstone', image: 'brimstone.svg', class: 'Controller',  skills: JSON.stringify([
                'Stim Beacon:  Chama um Stim Beacon, dando a todos os jogadores perto dele Velocidade de ataque',
                'Incendiário: Lançar uma granada incendiária que implanta um campo de fogo prejudicial', 
                'Sky Smoke: Use seu mapa para chamar telas de fumaça que obscurecem a visão. Clique para definir os locais e confirme para iniciar',
                'Ataque Orbital: Use o seu mapa para atingir um local, iniciando um que pulsa e causa dano por vários segundos'
                ]),
        },
        {
            name: 'Breach', image: 'breach.svg', class: 'Initiator',  skills: JSON.stringify([
                'Após o embate:  Dispare a carga para definir uma explosão de ação lenta através da parede',
                'Ponto de inflamação: Dispare a carga para definir uma última ação pela parede. A carga detona para cegar todos os jogadores', 
                'Linha de falha: Dispare para acionar o terremoto, atordoando todos os jogadores em sua zona',
                'Rolling Thunder: Dispare para enviar um terremoto em cascata por todo o terreno em um cone grande e atordoar a todos'
                ]),
        },
        {
            name: 'Reyna', image: 'reyna.svg', class: 'Duelist',  skills: JSON.stringify([
                'Olhar Voraz:  Reyna joga um olho para cima, depois de um tempo estoura cegando todos os inimigos que estiverem olhando para ele',
                'Devorar: Reyna consome uma orbe para regenerar sua vida. Além disso, a habilidade trás sobrecura', 
                'Dispensar: Apos eliminar um inimigo e utilizar Dispensar, seu personagem fica invulnerável',
                'Imperatriz: Imperatriz faz com que Valorant tenha medo de Reyna e ela entre em um estado de fúria, aumentando a velocidade de disparo das armas, equipamentos e munição'
                ]),
        },
    ]);
};