import type { Localized } from '@/i18n/utils';
import type { RouteKey, AnchorKey } from '@/i18n/routes';
import type { HouseElementId } from '@/i18n/slugs';
import type { RefSegment } from '@/data/house';

/**
 * PAGES DÉTAIL DES ÉLÉMENTS DE LA MAISON PHI-LEAN
 * (/maison/<élément>/ et /en/house/<element>/), dans l'ordre de la planche des sources.
 * Pour chaque élément : la littérature citée, ce que Phi-Lean en fait en mission,
 * de quoi se reconnaître, ce que cela change, et ce que coûte l'attente.
 */

export interface Literature {
  cite: RefSegment[]; // APA 7e édition
  /** Lien de vérification (éditeur, revue, catalogue), quand il existe. */
  link?: { url: string; label: string };
  body: Localized<string[]>;
}

export interface ElementLink {
  route: RouteKey;
  anchor?: AnchorKey;
  hash?: string; // ancre non traduite (ex. #codir-crise)
  label: Localized;
}

export interface HouseElement {
  id: HouseElementId;
  /** Nom tel qu'écrit dans la maison. */
  name: Localized;
  /** Étage de la maison (pour le dessin). */
  level: 'cap' | 'resultat' | 'methode' | 'capacite' | 'valeur' | 'socle';
  kicker: Localized;
  title: Localized;
  lead: Localized;
  description: Localized; // balise description (SEO)
  literature: Literature[];
  practice: Localized<string[]>;
  links: ElementLink[];
  proof?: Localized;
  symptoms: Localized<string[]>;
  benefits: Localized<string[]>;
  cost: Localized;
}

const devineCite: RefSegment[] = ['Devine, F. (2023). ', { i: 'Rapid mass engagement: Driving continuous improvement through employee culture creation' }, '. McGraw Hill.'];
const devineLink = { url: 'https://www.oreilly.com/library/view/-/9781264740802/', label: 'McGraw Hill (O’Reilly)' };

export const houseElements: HouseElement[] = [
  // ---------------------------------------------------------------- CAP
  {
    id: 'cap',
    name: { fr: 'Objectif ultime', en: 'Ultimate goal' },
    level: 'cap',
    kicker: { fr: 'Le cap', en: 'The direction' },
    title: {
      fr: 'Une raison d’être que chacun voit depuis son poste',
      en: 'A reason for being that everyone can see from their workstation',
    },
    lead: {
      fr: 'Au sommet de la maison, au-dessus du profit, il y a la raison d’être. Pas un slogan d’affiche : le critère qui permet à une équipe de trancher seule, et dans le bon sens, quand la direction n’est pas dans la pièce.',
      en: 'At the top of the house, above profit, sits the reason for being. Not a poster slogan: the yardstick that lets a team decide on its own, and in the right direction, when management is not in the room.',
    },
    description: {
      fr: 'L’objectif ultime de la maison Phi-Lean : la raison d’être de l’organisation. Ce qu’en disent Collins & Porras (1996) et Devine (2023), et comment Phi-Lean la fait vivre en mission.',
      en: 'The ultimate goal of the Phi-Lean house: the organisation’s reason for being. What Collins & Porras (1996) and Devine (2023) say, and how Phi-Lean brings it to life in its work.',
    },
    literature: [
      {
        cite: ['Collins, J. C., & Porras, J. I. (1996). Building your company’s vision. ', { i: 'Harvard Business Review, 74' }, '(5), 65–77.'],
        link: { url: 'https://hbr.org/1996/09/building-your-companys-vision', label: 'Harvard Business Review' },
        body: {
          fr: [
            'Tiré de leurs recherches sur les entreprises visionnaires qui durent, cet article de James Collins et Jerry Porras distingue deux composantes de la vision. L’idéologie centrale, d’abord : quelques valeurs essentielles et une raison d’être, ce pour quoi l’entreprise existe au-delà du profit. Elle ne bouge pas, ou presque. Le futur envisagé, ensuite : un objectif audacieux, à dix ou trente ans, décrit de façon assez vivante pour qu’on le voie. Lui peut et doit évoluer.',
            'Leur conclusion tient en une formule : préserver le cœur, stimuler le progrès. Les entreprises qui durent ne sont ni celles qui changent tout, ni celles qui ne changent rien, mais celles qui savent ce qui ne se négocie pas et ce qui doit bouger. Pour remonter jusqu’à la raison d’être, ils proposent une méthode très simple : se demander plusieurs fois de suite pourquoi ce que l’on fait est important.',
          ],
          en: [
            'Drawn from their research on visionary companies that last, this article by James Collins and Jerry Porras separates vision into two parts. First, the core ideology: a few essential values and a core purpose, what the company exists for beyond profit. It hardly ever moves. Second, the envisioned future: a bold goal ten to thirty years out, described vividly enough to be seen. That part can and should evolve.',
            'Their conclusion fits in one phrase: preserve the core, stimulate progress. Companies that last are neither those that change everything nor those that change nothing, but those that know what is not negotiable and what must move. To reach the core purpose they suggest something very simple: ask, several times in a row, why what you do matters.',
          ],
        },
      },
      {
        cite: devineCite,
        link: devineLink,
        body: {
          fr: [
            'Frank Devine part d’un constat de terrain : l’amélioration continue cale quand la culture ne suit pas, et une culture ne se décrète pas. Sa démarche fait construire par les équipes elles-mêmes une raison d’être élevée, le Higher Purpose, et les engagements qui vont avec.',
            'Parce qu’elles en sont les auteurs, les équipes s’y tiennent, et le changement de culture s’accélère au lieu de s’user. La raison d’être cesse d’être un texte de la direction : elle devient une promesse que chacun s’est faite.',
          ],
          en: [
            'Frank Devine starts from a field observation: continuous improvement stalls when the culture does not follow, and a culture cannot be decreed. His approach has the teams themselves build a Higher Purpose, and the commitments that go with it.',
            'Because they wrote it, teams hold to it, and culture change speeds up instead of wearing out. The reason for being stops being a management text and becomes a promise everyone has made to themselves.',
          ],
        },
      },
    ],
    practice: {
      fr: [
        'Un atelier avec le comité de direction pour formuler la raison d’être en une phrase qu’un opérateur comprend, et la relier à trois indicateurs concrets.',
        'Sa déclinaison avec les équipes, service par service : ce que chacun fait à son poste pour y contribuer, et ce qu’il arrête de faire.',
        'Un affichage au plus près du terrain, pour que la raison d’être serve à trancher les arbitrages du quotidien, pas seulement à décorer l’accueil.',
        'L’exercice de crise pour comités de direction, l’un de nos serious games : on vérifie, sous pression, que les décisions suivent vraiment le cap annoncé.',
      ],
      en: [
        'A workshop with the leadership team to put the reason for being into one sentence an operator understands, and tie it to three concrete indicators.',
        'Cascading it with the teams, department by department: what each person does at their workstation to contribute, and what they stop doing.',
        'Visual displays close to the work, so the reason for being settles everyday trade-offs instead of decorating reception.',
        'Our crisis exercise for leadership teams, one of our serious games: under pressure, we check that decisions really follow the stated direction.',
      ],
    },
    links: [
      { route: 'games', hash: 'codir-crise', label: { fr: 'L’exercice de crise pour comités de direction', en: 'The crisis exercise for leadership teams' } },
      { route: 'training', anchor: 'catalogue', label: { fr: 'Les formations', en: 'Training courses' } },
    ],
    symptoms: {
      fr: [
        'La raison d’être figure sur le site Internet, mais personne à l’atelier ne saurait la citer.',
        'Chaque service optimise ses propres indicateurs, parfois contre ceux du voisin.',
        'Tous les arbitrages remontent à la direction, faute de critère commun.',
        'Les meilleurs éléments partent sans pouvoir dire pourquoi ils seraient restés.',
      ],
      en: [
        'The reason for being is on the website, but nobody on the shop floor could quote it.',
        'Each department optimises its own indicators, sometimes against the next one’s.',
        'Every trade-off goes up to management, for want of a shared yardstick.',
        'Your best people leave without being able to say why they would have stayed.',
      ],
    },
    benefits: {
      fr: [
        'Des décisions prises plus bas, plus vite, et dans le bon sens.',
        'Un critère commun pour arbitrer entre ventes, production et finance.',
        'Des équipes qui savent pourquoi leur travail compte, et qui le montrent.',
        'Une stratégie qui peut changer sans que l’entreprise perde son cap.',
      ],
      en: [
        'Decisions made lower down, faster, and in the right direction.',
        'A shared yardstick to settle trade-offs between sales, operations and finance.',
        'Teams who know why their work matters, and show it.',
        'A strategy that can change without the company losing its way.',
      ],
    },
    cost: {
      fr: 'Une raison d’être restée slogan coûte cher sans jamais apparaître dans les comptes : chaque arbitrage tranché au cas par cas, chaque talent qui s’en va, chaque projet qui s’enlise faute de critère commun.',
      en: 'A reason for being left as a slogan is expensive, yet never shows up in the accounts: every trade-off settled case by case, every talent who leaves, every project that bogs down for want of a shared yardstick.',
    },
  },

  // ---------------------------------------------------------------- RÉSULTAT
  {
    id: 'resultat',
    name: { fr: 'Profitables aujourd’hui et demain', en: 'Profitable today and tomorrow' },
    level: 'resultat',
    kicker: { fr: 'Le résultat', en: 'The result' },
    title: {
      fr: 'Gagner de l’argent, maintenant et à l’avenir',
      en: 'Making money, now and in the future',
    },
    lead: {
      fr: 'Le toit de la maison dit le but d’une entreprise, sans fausse pudeur : gagner de l’argent. Le mot qui compte est « demain ». Être profitable ce trimestre est facile ; l’être durablement est une discipline.',
      en: 'The roof of the house states a company’s goal without false modesty: to make money. The word that matters is “tomorrow”. Being profitable this quarter is easy; staying profitable is a discipline.',
    },
    description: {
      fr: 'Profitables aujourd’hui et demain : le toit de la maison Phi-Lean. Ce qu’enseigne The Goal de Goldratt & Cox (1984), et comment Phi-Lean fait croître les revenus plus vite que les dépenses.',
      en: 'Profitable today and tomorrow: the roof of the Phi-Lean house. What Goldratt & Cox’s The Goal (1984) teaches, and how Phi-Lean grows income faster than expenses.',
    },
    literature: [
      {
        cite: ['Goldratt, E. M., & Cox, J. (1984). ', { i: 'The goal: A process of ongoing improvement' }, '. North River Press.'],
        body: {
          fr: [
            'The Goal est un roman d’entreprise devenu un classique des écoles de management. Alex Rogo, directeur d’usine, a trois mois pour redresser un site promis à la fermeture. Guidé par Jonah, un physicien, il découvre que le but de l’entreprise n’est ni la productivité de chaque machine ni le taux d’occupation de chaque personne : c’est de gagner de l’argent, maintenant et à l’avenir.',
            'Goldratt mesure ce but avec trois grandeurs seulement : le débit, c’est-à-dire l’argent que le système génère par ses ventes, les stocks et les dépenses d’exploitation. Et il montre que le débit de toute l’usine est fixé par une seule ressource, le goulot. Une heure perdue au goulot est une heure perdue pour tout le système ; une heure gagnée ailleurs n’est qu’un mirage. De ce roman naîtra la théorie des contraintes.',
          ],
          en: [
            'The Goal is a business novel that became a management-school classic. Alex Rogo, a plant manager, has three months to turn around a site facing closure. Guided by Jonah, a physicist, he discovers that the goal of the company is neither the productivity of every machine nor the utilisation of every person: it is to make money, now and in the future.',
            'Goldratt measures that goal with just three quantities: throughput, the money the system generates through sales; inventory; and operating expense. And he shows that the throughput of the whole plant is set by a single resource, the bottleneck. An hour lost at the bottleneck is an hour lost for the whole system; an hour saved elsewhere is a mirage. The theory of constraints grew out of this novel.',
          ],
        },
      },
    ],
    practice: {
      fr: [
        'Nous partons du compte de résultat, pas des outils : où se fait la marge, où elle se perd, et quel flux la porte.',
        'Le Diagnostic VSM Express localise le goulot en trois jours sur site, et chiffre ce que vaut une heure de goulot en chiffre d’affaires.',
        'Chaque décision passe trois questions : augmente-t-elle le débit, baisse-t-elle les stocks, baisse-t-elle les dépenses ? Les économies locales qui ne changent rien au total ne passent pas.',
        'Pour « demain », nous ajoutons la gestion des risques : un résultat qui ne résiste pas à la première rupture fournisseur n’est pas un résultat.',
      ],
      en: [
        'We start from the profit and loss account, not the tools: where margin is made, where it leaks, and which flow carries it.',
        'The VSM Express Diagnostic locates the bottleneck in three days on site, and puts a revenue figure on one hour of bottleneck time.',
        'Every decision faces three questions: does it raise throughput, cut inventory, cut operating expense? Local savings that change nothing in the total do not pass.',
        'For “tomorrow”, we add risk management: a result that does not survive the first supplier failure is not a result.',
      ],
    },
    links: [
      { route: 'consulting', anchor: 'vsmExpress', label: { fr: 'Le Diagnostic VSM Express', en: 'The VSM Express Diagnostic' } },
      { route: 'scrm', label: { fr: 'Lean Supply Chain Risk Management', en: 'Lean Supply Chain Risk Management' } },
    ],
    proof: {
      fr: 'Sur le dernier site qu’il a dirigé, Manuel Gourmand a obtenu +14 % d’EBITDA en deux ans, sans investissement lourd : l’offre a été scindée en deux marchés, avec un service adapté à chacun, et le prix de vente moyen a progressé de 22 %.',
      en: 'At the last site he ran, Manuel Gourmand delivered +14% EBITDA in two years without heavy investment: the offer was split into two markets, each with its own level of service, and the average selling price rose 22%.',
    },
    symptoms: {
      fr: [
        'Les plans d’économies se succèdent, et la marge ne bouge pas.',
        'Tout le monde est occupé à 100 %, et les délais s’allongent quand même.',
        'On a investi dans une machine… qui n’était pas le goulot.',
        'Le résultat de l’année dépend de deux ou trois clients ou fournisseurs que personne n’a sécurisés.',
      ],
      en: [
        'Cost-cutting plans follow one another, and the margin does not move.',
        'Everyone is 100% busy, and lead times still get longer.',
        'You invested in a machine… that was not the bottleneck.',
        'The year’s result hangs on two or three customers or suppliers nobody has secured.',
      ],
    },
    benefits: {
      fr: [
        'Une vision claire de la ressource qui fixe votre chiffre d’affaires.',
        'Des investissements placés là où ils rapportent.',
        'Des revenus qui croissent plus vite que les dépenses, sans plan social.',
        'Un résultat qui tient quand le contexte se durcit.',
      ],
      en: [
        'A clear view of the resource that sets your revenue.',
        'Investment placed where it pays.',
        'Income growing faster than expenses, without redundancies.',
        'A result that holds when conditions get tougher.',
      ],
    },
    cost: {
      fr: 'Une heure perdue au goulot ne se rattrape jamais : elle est perdue pour toute l’entreprise. Chaque semaine où le goulot reste invisible, c’est du chiffre d’affaires que vous ne reverrez pas.',
      en: 'An hour lost at the bottleneck is never made up: it is lost for the whole company. Every week the bottleneck stays invisible is revenue you will not see again.',
    },
  },

  // ---------------------------------------------------------------- MÉTHODE
  {
    id: 'methode',
    name: { fr: 'Systems Thinking', en: 'Systems Thinking' },
    level: 'methode',
    kicker: { fr: 'La méthode', en: 'The method' },
    title: {
      fr: 'C’est le système qui fait la performance',
      en: 'The system makes the performance',
    },
    lead: {
      fr: 'La poutre relie les deux piliers. Elle rappelle qu’un résultat ne se gagne pas service par service : il dépend de la façon dont la demande du client traverse toute l’organisation, des fournisseurs jusqu’à la livraison.',
      en: 'The beam ties the two pillars together. It is a reminder that results are not won department by department: they depend on how customer demand travels through the whole organisation, from suppliers to delivery.',
    },
    description: {
      fr: 'Systems Thinking, la poutre de la maison Phi-Lean : concevoir l’organisation comme un système, à partir de la demande client et du flux. Ce qu’en dit Seddon (2003), et comment Phi-Lean l’applique.',
      en: 'Systems Thinking, the beam of the Phi-Lean house: designing the organisation as a system, from customer demand and flow. What Seddon (2003) says, and how Phi-Lean applies it.',
    },
    literature: [
      {
        cite: ['Seddon, J. (2003). ', { i: 'Freedom from command and control: A better way to make the work work' }, '. Vanguard Education.'],
        body: {
          fr: [
            'Psychologue du travail britannique et fondateur du cabinet Vanguard, John Seddon a passé sa carrière à étudier les organisations de service : banques, assurances, centres d’appels, administrations. Ce livre montre pourquoi le management par le commandement et le contrôle (objectifs chiffrés, budgets par service, procédures dictées d’en haut) dégrade souvent ce qu’il prétend améliorer.',
            'Sa notion la plus utile est la demande d’échec : les appels, courriers et relances qui n’existent que parce que quelque chose n’a pas été fait, ou mal fait, la première fois. Dans un service municipal du logement, son équipe en a compté 80 % sur 1 200 appels. Seddon propose de concevoir l’organisation à partir de la demande du client et du flux qui y répond, en étudiant d’abord le travail tel qu’il se fait réellement, vu de l’extérieur.',
          ],
          en: [
            'A British occupational psychologist and founder of the Vanguard consultancy, John Seddon has spent his career studying service organisations: banks, insurers, call centres, public services. This book shows why command-and-control management (numerical targets, departmental budgets, procedures handed down from the top) often damages what it claims to improve.',
            'His most useful idea is failure demand: the calls, letters and chasers that exist only because something was not done, or not done right, the first time. In a council housing service, his team counted 80% of 1,200 calls. Seddon proposes designing the organisation from customer demand and the flow that answers it, starting by studying the work as it is really done, seen from the outside in.',
          ],
        },
      },
    ],
    practice: {
      fr: [
        'Nous cartographions le flux de bout en bout (VSM), de la demande du client jusqu’à la livraison, en traversant les services au lieu de les auditer un par un.',
        'Dans les services, nous mesurons la demande d’échec avant de chercher à « traiter plus vite » : supprimer une relance vaut mieux que l’automatiser.',
        'Nous remplaçons les objectifs qui opposent les services par des mesures qui suivent le flux : délai de bout en bout, livré à l’heure, bon du premier coup.',
        'Le Beer Game, conçu au MIT dans les années 1960, fait vivre l’effet coup de fouet aux équipes : chacun décide raisonnablement, et le système produit quand même des stocks et des ruptures en cascade.',
      ],
      en: [
        'We map the flow end to end (VSM), from customer demand to delivery, cutting across departments instead of auditing them one by one.',
        'In services, we measure failure demand before trying to “process faster”: removing a chaser beats automating it.',
        'We replace targets that pit departments against each other with measures that follow the flow: end-to-end lead time, on-time delivery, right first time.',
        'The Beer Game, designed at MIT in the 1960s, lets teams live the bullwhip effect: everyone decides sensibly, and the system still produces cascading stock and shortages.',
      ],
    },
    links: [
      { route: 'services', label: { fr: 'Lean Flux Services', en: 'Lean Services Flow' } },
      { route: 'consulting', anchor: 'supply', label: { fr: 'Lean Flux Supply Chain', en: 'Lean Supply Chain Flow' } },
      { route: 'games', label: { fr: 'Le Beer Game et nos serious games', en: 'The Beer Game and our serious games' } },
    ],
    symptoms: {
      fr: [
        'Chaque service atteint ses objectifs, et le client est mécontent.',
        'Les mêmes problèmes reviennent après chaque réorganisation.',
        'Une bonne part des appels entrants sont des relances ou des réclamations.',
        'Les stocks montent, et les ruptures aussi.',
      ],
      en: [
        'Every department hits its targets, and the customer is unhappy.',
        'The same problems come back after every reorganisation.',
        'A good share of incoming calls are chasers or complaints.',
        'Stock goes up, and so do shortages.',
      ],
    },
    benefits: {
      fr: [
        'Un délai de bout en bout raccourci, sans pression supplémentaire sur les équipes.',
        'Moins de travail inutile : relances, ressaisies, corrections.',
        'Des indicateurs qui rapprochent les services au lieu de les opposer.',
        'Des améliorations qui tiennent, parce qu’elles touchent le système et pas seulement un poste.',
      ],
      en: [
        'Shorter end-to-end lead time, without extra pressure on teams.',
        'Less useless work: chasers, re-keying, corrections.',
        'Indicators that bring departments together instead of setting them against each other.',
        'Improvements that last, because they change the system and not just one workstation.',
      ],
    },
    cost: {
      fr: 'Un système mal conçu fabrique son propre travail. Chaque mois, la demande d’échec occupe des personnes que vous payez pour servir des clients.',
      en: 'A badly designed system manufactures its own work. Every month, failure demand ties up people you are paying to serve customers.',
    },
  },

  // ---------------------------------------------------------------- CAPACITÉ
  {
    id: 'capacite',
    name: { fr: '+ Capacité', en: '+ Capacity' },
    level: 'capacite',
    kicker: { fr: 'Pilier « Servir plus »', en: '“Serve more” pillar' },
    title: {
      fr: 'Servir plus de clients, sans investissement lourd',
      en: 'Serve more customers, without heavy investment',
    },
    lead: {
      fr: 'Le pilier de gauche repose sur la capacité. Avant d’acheter une machine, de recruter ou de construire, il y a presque toujours de la capacité cachée dans le flux : attentes, changements de série, pannes, files d’attente.',
      en: 'The left-hand pillar rests on capacity. Before buying a machine, hiring or building, there is almost always hidden capacity in the flow: waiting, changeovers, breakdowns, queues.',
    },
    description: {
      fr: 'Le pilier « Servir plus » de la maison Phi-Lean : libérer de la capacité sans investissement lourd. Ce qu’en disent Bicheno & Holweg (The Lean Toolbox, 2016), et comment Phi-Lean le met en œuvre.',
      en: 'The “Serve more” pillar of the Phi-Lean house: releasing capacity without heavy investment. What Bicheno & Holweg (The Lean Toolbox, 2016) say, and how Phi-Lean puts it to work.',
    },
    literature: [
      {
        cite: ['Bicheno, J., & Holweg, M. (2016). ', { i: 'The lean toolbox: A handbook for lean transformation' }, ' (5th ed.). PICSIE Books.'],
        link: { url: 'https://search.worldcat.org/title/952663549', label: 'WorldCat' },
        body: {
          fr: [
            'The Lean Toolbox est l’un des manuels de référence du Lean dans le monde anglophone. John Bicheno, professeur émérite à l’University of Buckingham, et Matthias Holweg, professeur à la Saïd Business School d’Oxford, y rassemblent les outils et, surtout, les principes qui les relient : flux, demande, variabilité, capacité, gaspillages.',
            'Leur message sur la capacité est contre-intuitif : une ressource chargée à 100 % n’est pas efficace, elle est engorgée. Dès qu’il y a de la variabilité, le temps d’attente explose à mesure que la charge approche de son maximum ; c’est ce que décrivent les lois des files d’attente. Réduire la variabilité, lisser la demande et protéger le goulot libère davantage de capacité qu’accélérer chaque poste.',
          ],
          en: [
            'The Lean Toolbox is one of the reference handbooks of Lean in the English-speaking world. John Bicheno, Emeritus Professor at the University of Buckingham, and Matthias Holweg, Professor at Oxford’s Saïd Business School, bring together the tools and, above all, the principles that connect them: flow, demand, variability, capacity, waste.',
            'Their message on capacity is counter-intuitive: a resource loaded to 100% is not efficient, it is congested. As soon as there is variability, waiting time explodes as load approaches its maximum, as queueing theory describes. Reducing variability, levelling demand and protecting the bottleneck release more capacity than speeding up every workstation.',
          ],
        },
      },
    ],
    practice: {
      fr: [
        'Le Diagnostic VSM Express mesure, sur un flux réel, le temps qui ajoute de la valeur et tout le reste. Il n’est pas rare de trouver quelques heures de travail utile pour plusieurs semaines de délai.',
        'Nous mesurons le TRS du goulot, en temps réel si besoin avec notre partenaire Factbird, pour savoir où part la capacité : arrêts, ralentissements, non-qualité.',
        'Changements de série raccourcis (SMED), flux tiré et kanban pour arrêter de produire ce qui attend.',
        'Lean Flux Usine pour l’atelier, Lean Flux Services pour les bureaux : la capacité cachée existe aussi dans un processus administratif.',
      ],
      en: [
        'The VSM Express Diagnostic measures, on a real flow, the time that adds value and everything else. Finding a few hours of useful work in several weeks of lead time is not unusual.',
        'We measure the OEE of the bottleneck, in real time if needed with our partner Factbird, to see where capacity goes: stoppages, slowdowns, poor quality.',
        'Shorter changeovers (SMED), pull flow and kanban to stop producing what only waits.',
        'Lean Plant Flow for the shop floor, Lean Services Flow for offices: hidden capacity exists in administrative processes too.',
      ],
    },
    links: [
      { route: 'consulting', anchor: 'usine', label: { fr: 'Lean Flux Usine', en: 'Lean Plant Flow' } },
      { route: 'services', label: { fr: 'Lean Flux Services', en: 'Lean Services Flow' } },
      { route: 'partners', anchor: 'factbird', label: { fr: 'Factbird : le TRS en temps réel', en: 'Factbird: real-time OEE' } },
    ],
    symptoms: {
      fr: [
        'Vous refusez des commandes, ou vous allongez vos délais, faute de capacité.',
        'Un projet d’investissement est sur la table pour « passer le pic ».',
        'Les heures supplémentaires sont devenues la norme.',
        'Personne ne sait dire quelle machine, ou quelle personne, fixe le débit.',
      ],
      en: [
        'You turn down orders, or stretch lead times, for lack of capacity.',
        'An investment project is on the table to “get through the peak”.',
        'Overtime has become the norm.',
        'Nobody can say which machine, or which person, sets the pace.',
      ],
    },
    benefits: {
      fr: [
        'Plus de volume avec les mêmes moyens, avant d’investir.',
        'Des délais plus courts, donc des clients servis plus vite.',
        'Un investissement décidé en connaissance de cause, s’il reste nécessaire.',
        'Moins d’heures supplémentaires, et moins de tension sur les équipes.',
      ],
      en: [
        'More volume from the same resources, before investing.',
        'Shorter lead times, so customers are served faster.',
        'An investment decided with full knowledge, if it is still needed.',
        'Less overtime, and less strain on teams.',
      ],
    },
    cost: {
      fr: 'La capacité perdue ne se stocke pas. Une commande refusée aujourd’hui part chez un concurrent, et il est rare qu’elle revienne.',
      en: 'Lost capacity cannot be stored. An order turned down today goes to a competitor, and it rarely comes back.',
    },
  },

  // ---------------------------------------------------------------- VALEUR AJOUTÉE
  {
    id: 'valeur',
    name: { fr: '+ Valeur ajoutée (qualité)', en: '+ Added value (quality)' },
    level: 'valeur',
    kicker: { fr: 'Pilier « Servir mieux »', en: '“Serve better” pillar' },
    title: {
      fr: 'Servir mieux : la qualité du premier coup',
      en: 'Serve better: quality right first time',
    },
    lead: {
      fr: 'Le pilier de droite repose sur la valeur ajoutée. Une qualité obtenue du premier coup coûte moins cher qu’une qualité contrôlée, et elle permet de vendre au juste prix.',
      en: 'The right-hand pillar rests on added value. Quality achieved right first time costs less than quality inspected in, and it lets you sell at the right price.',
    },
    description: {
      fr: 'Le pilier « Servir mieux » de la maison Phi-Lean : valeur ajoutée et qualité. La réaction en chaîne de Deming (Out of the Crisis, 1986), et comment Phi-Lean l’applique en entreprise.',
      en: 'The “Serve better” pillar of the Phi-Lean house: added value and quality. Deming’s chain reaction (Out of the Crisis, 1986), and how Phi-Lean applies it.',
    },
    literature: [
      {
        cite: ['Deming, W. E. (1986). ', { i: 'Out of the crisis' }, '. MIT Center for Advanced Engineering Study.'],
        link: { url: 'https://archive.org/details/outofcrisisquali00demi', label: 'Internet Archive' },
        body: {
          fr: [
            'W. Edwards Deming est le statisticien américain dont l’enseignement a accompagné le redressement de l’industrie japonaise après la guerre. Out of the Crisis s’adresse aux dirigeants occidentaux : la crise de compétitivité vient d’abord du management, pas de ceux qui font le travail.',
            'Au cœur du livre, la réaction en chaîne : améliorer la qualité fait baisser les coûts, parce qu’il y a moins de reprises, d’erreurs, de retards et de gaspillage ; la productivité augmente ; l’entreprise conquiert le marché avec une meilleure qualité et un meilleur prix, reste en activité et crée des emplois. Deming y ajoute ses quatorze points pour le management, dont cesser de compter sur l’inspection de masse et chasser la peur. Pour lui, la grande majorité des problèmes relèvent du système, donc de la direction, et non des personnes.',
          ],
          en: [
            'W. Edwards Deming is the American statistician whose teaching accompanied the recovery of Japanese industry after the war. Out of the Crisis speaks to Western leaders: the competitiveness crisis comes first from management, not from the people who do the work.',
            'At the heart of the book is the chain reaction: improving quality lowers costs, because there is less rework, fewer mistakes, delays and less waste; productivity rises; the company captures the market with better quality and a better price, stays in business and provides jobs. Deming adds his fourteen points for management, including ceasing dependence on mass inspection and driving out fear. For him, the great majority of problems belong to the system, and therefore to management, not to people.',
          ],
        },
      },
    ],
    practice: {
      fr: [
        'Nous partons de la voix du client : ce qu’il paie vraiment, ce qu’il ne veut pas payer, et ce que lui coûtent vos erreurs.',
        'Nous chiffrons la non-qualité : reprises, rebuts, retours, gestes commerciaux, temps passé à corriger.',
        'Résolution de problèmes à la source (A3, PDCA), et standards construits avec ceux qui font le travail.',
        'Quand les clients n’attendent pas la même chose, nous segmentons l’offre : un service sur mesure pour ceux qui paient la valeur, un flux optimisé pour les marchés sensibles au prix.',
      ],
      en: [
        'We start from the voice of the customer: what they really pay for, what they will not pay for, and what your mistakes cost them.',
        'We put a figure on poor quality: rework, scrap, returns, commercial gestures, time spent correcting.',
        'Root-cause problem solving (A3, PDCA), and standards built with the people who do the work.',
        'When customers do not expect the same thing, we segment the offer: a tailored service for those who pay for value, an optimised flow for price-sensitive markets.',
      ],
    },
    links: [
      { route: 'consulting', anchor: 'usine', label: { fr: 'Lean Flux Usine', en: 'Lean Plant Flow' } },
      { route: 'services', label: { fr: 'Lean Flux Services', en: 'Lean Services Flow' } },
      { route: 'training', anchor: 'catalogue', label: { fr: 'Formations à la résolution de problèmes', en: 'Problem-solving training' } },
    ],
    proof: {
      fr: 'C’est la démarche que Manuel Gourmand a menée sur son dernier site : deux niveaux de service selon les marchés, un taux de service passé de 75 à 98 %, et un prix de vente moyen en hausse de 22 %.',
      en: 'This is the approach Manuel Gourmand led at his last site: two levels of service by market, on-time service up from 75% to 98%, and the average selling price up 22%.',
    },
    symptoms: {
      fr: [
        'Le contrôle qualité grossit à chaque réclamation.',
        'Vous accordez des remises pour compenser des retards ou des défauts.',
        'Vos clients exigeants et vos clients sensibles au prix reçoivent exactement le même service.',
        'Les mêmes défauts reviennent, avec des actions correctives qui visent des personnes.',
      ],
      en: [
        'Quality inspection grows with every complaint.',
        'You grant discounts to make up for delays or defects.',
        'Your demanding customers and your price-sensitive customers get exactly the same service.',
        'The same defects come back, with corrective actions aimed at people.',
      ],
    },
    benefits: {
      fr: [
        'Moins de reprises et de rebuts, donc des coûts qui baissent sans coupes.',
        'Un prix défendu par la valeur, pas par la remise.',
        'Des clients qui restent, et qui vous recommandent.',
        'Des équipes qui corrigent les causes au lieu de chercher des coupables.',
      ],
      en: [
        'Less rework and scrap, so costs fall without cuts.',
        'A price defended by value, not by discount.',
        'Customers who stay, and recommend you.',
        'Teams who fix causes instead of looking for culprits.',
      ],
    },
    cost: {
      fr: 'La non-qualité se paie deux fois : une fois pour la reprise, une fois pour le client qui ne revient pas. Et elle ne figure jamais en entier dans les comptes.',
      en: 'Poor quality is paid for twice: once for the rework, once for the customer who does not come back. And it never shows up in full in the accounts.',
    },
  },

  // ---------------------------------------------------------------- SOCLE
  {
    id: 'socle',
    name: { fr: 'Épanouis et compétents', en: 'Fulfilled and competent' },
    level: 'socle',
    kicker: { fr: 'Le socle', en: 'The foundation' },
    title: {
      fr: 'Des équipes épanouies et compétentes : le socle qui fait tenir la maison',
      en: 'Fulfilled and competent teams: the foundation that holds the house up',
    },
    lead: {
      fr: 'La base de la maison, ce sont les personnes. Des équipes engagées et compétentes font durablement baisser les coûts, parce qu’elles voient les problèmes, les signalent et les règlent. C’est la partie que l’on saute parce qu’elle paraît « soft » ; c’est la plus exigeante.',
      en: 'The base of the house is people. Engaged, competent teams bring costs down for good, because they see problems, raise them and fix them. It is the part executives skip because it sounds soft; it is the hardest.',
    },
    description: {
      fr: 'Le socle de la maison Phi-Lean : des équipes épanouies et compétentes. Ce qu’en disent Devine (2023) et Grenny et al. (Crucial Conversations, 2022), et comment Phi-Lean développe les équipes.',
      en: 'The foundation of the Phi-Lean house: fulfilled and competent teams. What Devine (2023) and Grenny et al. (Crucial Conversations, 2022) say, and how Phi-Lean develops teams.',
    },
    literature: [
      {
        cite: devineCite,
        link: devineLink,
        body: {
          fr: [
            'Frank Devine s’attaque à une question que beaucoup de démarches Lean contournent : pourquoi les équipes adhèrent-elles, ou pas ? Sa réponse : parce qu’elles écrivent elles-mêmes les règles.',
            'Dans sa démarche, ce sont les équipes qui définissent leurs propres standards de comportement : ce qu’elles attendent les unes des autres, et de leur encadrement. Une règle que l’on a écrite se respecte ; une règle imposée se contourne.',
          ],
          en: [
            'Frank Devine tackles a question many Lean programmes avoid: why do teams buy in, or not? His answer: because they write the rules themselves.',
            'In his approach, the teams define their own standards of behaviour: what they expect from each other, and from their managers. A rule you wrote yourself gets respected; an imposed rule gets worked around.',
          ],
        },
      },
      {
        cite: ['Grenny, J., Patterson, K., McMillan, R., Switzler, A., & Gregory, E. (2022). ', { i: 'Crucial conversations: Tools for talking when stakes are high' }, ' (3rd ed.). McGraw Hill.'],
        body: {
          fr: [
            'Crucial Conversations, l’un des livres de management les plus lus au monde, définit la conversation cruciale comme un échange où les enjeux sont élevés, les avis divergent et les émotions sont fortes. C’est précisément là que la plupart d’entre nous se taisent ou s’emportent.',
            'Les auteurs montrent que ces moments se travaillent : clarifier d’abord ce que l’on veut vraiment, rendre la discussion sûre pour l’autre, partager les faits avant ses conclusions. Dans un atelier comme dans un comité de direction, la qualité du dialogue fixe la vitesse à laquelle les problèmes remontent.',
          ],
          en: [
            'Crucial Conversations, one of the most widely read management books in the world, defines a crucial conversation as one where stakes are high, opinions vary and emotions run strong. That is exactly when most of us go silent or blow up.',
            'The authors show that these moments can be practised: first clarify what you really want, make it safe for the other person, share facts before conclusions. On the shop floor as in the boardroom, the quality of dialogue sets the speed at which problems surface.',
          ],
        },
      },
    ],
    practice: {
      fr: [
        'Les équipes participent au diagnostic dès le premier jour : ce sont elles qui connaissent le mieux le flux.',
        'Formation par la pratique : la méthode TWI pour transmettre un poste en quelques heures, et une matrice des compétences pour qu’aucune tâche critique ne repose sur une seule personne.',
        'Des serious games (Beer Game, Lean Café, DISC-Joker) pour apprendre en jouant, et pour se parler autrement.',
        'L’accompagnement des managers dans les conversations difficiles : remonter un problème, refuser une demande, recadrer sans casser.',
      ],
      en: [
        'Teams take part in the diagnostic from day one: they are the ones who know the flow best.',
        'Learning by doing: the TWI method to pass on a job in a few hours, and a skills matrix so that no critical task rests on a single person.',
        'Serious games (Beer Game, Lean Café, DISC-Joker) to learn by playing, and to talk to each other differently.',
        'Coaching managers through difficult conversations: raising a problem, saying no, correcting without breaking.',
      ],
    },
    links: [
      { route: 'training', anchor: 'catalogue', label: { fr: 'Les formations', en: 'Training courses' } },
      { route: 'games', label: { fr: 'Les serious games', en: 'Serious games' } },
    ],
    symptoms: {
      fr: [
        'Les problèmes remontent tard, ou par surprise.',
        'Une ou deux personnes détiennent un savoir que personne d’autre n’a.',
        'Les démarches d’amélioration s’essoufflent après le départ du consultant.',
        'Le turnover ou l’absentéisme pèsent sur la production.',
      ],
      en: [
        'Problems surface late, or as a surprise.',
        'One or two people hold knowledge nobody else has.',
        'Improvement efforts run out of steam once the consultant leaves.',
        'Turnover or absenteeism weigh on output.',
      ],
    },
    benefits: {
      fr: [
        'Des problèmes signalés tôt, quand ils coûtent encore peu.',
        'Des équipes polyvalentes, donc une entreprise moins fragile.',
        'Une amélioration qui continue sans aide extérieure.',
        'Un lieu de travail que les bons éléments ne quittent pas.',
      ],
      en: [
        'Problems raised early, while they are still cheap.',
        'Multi-skilled teams, so a less fragile company.',
        'Improvement that continues without outside help.',
        'A workplace good people do not leave.',
      ],
    },
    cost: {
      fr: 'Dans beaucoup de PME, le fournisseur unique le plus dangereux porte un prénom. Il connaît la machine, le client ou le mot de passe, et un jour il part en vacances, ou ailleurs.',
      en: 'In many small firms, the most dangerous single supplier has a first name. They know the machine, the customer or the password, and one day they go on holiday, or elsewhere.',
    },
  },
];

export function getElement(id: HouseElementId): HouseElement {
  const element = houseElements.find((e) => e.id === id);
  if (!element) throw new Error(`Élément inconnu : ${id}`);
  return element;
}
