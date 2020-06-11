import Knex from 'knex';


export async function seed(knex: Knex) {
    await knex('agents').insert([
        {
            name: 'Omen', image: 'omen.svg', class: 'Controller', skills: JSON.stringify([
                'Paranóia: envia uma sombra etérea em linha reta, oculta visao e audio do inimigo', 
                'Caminhada Sombria:  Teletransporte a uma curta distância',
                'Capa Escura: Lança uma esfera etérea obscura de sombra em seu local final',
                'Nas sombras: Teleporte global, caso receba dano no casting o tp e cancelado'
            ])
        },
        {
            name: 'Jett', image: 'jett.svg', class: 'Duelist',  skills: JSON.stringify([
                
                'Explosão de nuvens: implanta uma nuvem de fumaça que obstrui a visão do inimigo',
                'Updraft: Propele você pelo ar',
                'Vento de cauda: percorre uma curta distância na direção que você deseja seguir',
                'Blade Storm: equipa o agente com várias facas de arremesso',
            ])
        },
        {
            name: 'Phoenix', image: 'phoenix.svg', class: 'Duelist',  skills: JSON.stringify([
                'Chama:  Uma parede de fogo que você pode curvar à medida que lança, cura o phoenix e causa dano no inimigo',
                'Bola curva: Um flashbang que você pode curvar rapidamente nos cantos.', 
                'Hothands: Uma granada molotov que cura você e causa dano de area aos inimigos',
                'Execute de volta: Depois do cast, você tem um curto período de tempo onde, se você morrer, voltará à vida e ao local de'
                ]),
        },
    ]);
};