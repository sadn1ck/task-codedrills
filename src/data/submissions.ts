export const submissionHeaders = [
  {
    class: 'text-overline',
    text: 'Username',
    value: 'submittedBy',
    sortable: false,
  },
  {
    class: 'text-overline',
    text: 'Problem',
    value: 'title',
    sortable: false,
  },
  {
    class: 'text-overline',
    text: 'Time',
    value: 'time',
    sort: (a: string, b: string): number => parseInt(a.slice(0, -2), 10)
      - parseInt(b.slice(0, -2), 10),
  },
  {
    class: 'text-overline',
    text: 'Memory',
    value: 'memory',
    sort: (a: string, b: string): number => parseInt(a.slice(0, -2), 10)
    - parseInt(b.slice(0, -2), 10),
  },
  {
    class: 'text-overline',
    text: 'Language',
    value: 'language',
    sortable: false,
  },
];
export const submissionItems = [
  {
    id: 'a4990a24-aa27-48bf-b8e5-7fbebf878bac',
    submittedBy: 'bmighele0',
    time: '849ms',
    memory: '2604KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'cc40e27e-bc76-4368-a519-10dc2d4a79ef',
    submittedBy: 'mdorsay1',
    time: '362ms',
    memory: '2848KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '39e4003e-37f8-4ab8-ae0a-0c690920fd60',
    submittedBy: 'ljosifovic2',
    time: '60ms',
    memory: '4820KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '95d5007b-2a84-497c-9f3f-2a740e7396fd',
    submittedBy: 'rboylund3',
    time: '59ms',
    memory: '4613KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '2978d8da-5802-4f39-b48a-697cc1368e9d',
    submittedBy: 'rkibbel4',
    time: '662ms',
    memory: '2245KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '712811b5-585c-4b83-a8af-495444efee6a',
    submittedBy: 'bgorch5',
    time: '795ms',
    memory: '67KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '52522285-5a48-42c7-bdaf-159c34078b12',
    submittedBy: 'cdarcey6',
    time: '11ms',
    memory: '4716KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '66f2e4fa-e698-49b8-a137-7e290c9b8021',
    submittedBy: 'tjosephson7',
    time: '198ms',
    memory: '4273KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '834f4da5-fc4d-401e-b7b0-92fdf43ac179',
    submittedBy: 'aalbinson8',
    time: '40ms',
    memory: '2589KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '9807c163-a339-4782-a970-07454358181d',
    submittedBy: 'dmoran9',
    time: '304ms',
    memory: '1148KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '136acc28-7038-471a-bcc2-d1a3797fd5e3',
    submittedBy: 'inisena',
    time: '739ms',
    memory: '3436KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'cfe26913-0e38-49cf-b180-e6cf41a53950',
    submittedBy: 'erollb',
    time: '79ms',
    memory: '1978KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'd4d4c862-ca11-4c46-a3be-5fd545dd96ef',
    submittedBy: 'uvidelerc',
    time: '813ms',
    memory: '4020KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'e31800fe-5fc8-42e4-bd9f-a4433ba016cf',
    submittedBy: 'zchataind',
    time: '561ms',
    memory: '3302KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '8cbd7bba-1f04-491b-8cc9-e876cddee95d',
    submittedBy: 'dantonoczyke',
    time: '626ms',
    memory: '1626KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'a98c96d5-c1ea-4d2f-8d3e-7be0e6de750d',
    submittedBy: 'agyvesf',
    time: '544ms',
    memory: '2677KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '4508c446-980e-442b-87b9-1ecf2e26552b',
    submittedBy: 'dagostinig',
    time: '156ms',
    memory: '576KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'ac571da8-8c5c-4719-98e5-4dccc3088f7c',
    submittedBy: 'ngooseyh',
    time: '453ms',
    memory: '2756KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '097c6bcc-fdb2-4cf8-ad89-cf84e795a618',
    submittedBy: 'lspoffordi',
    time: '624ms',
    memory: '2970KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '31f10d33-ea6e-4157-9483-e35992586190',
    submittedBy: 'otylorj',
    time: '938ms',
    memory: '1754KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '0e704b8b-8a46-4791-8d74-88e367ec20f5',
    submittedBy: 'itatchellk',
    time: '373ms',
    memory: '940KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'b73d262a-fb24-492e-bc24-06f38de27436',
    submittedBy: 'pmurrelll',
    time: '921ms',
    memory: '4114KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'e81edc5d-ce6a-4860-8f17-7c434318643d',
    submittedBy: 'pivorym',
    time: '856ms',
    memory: '4268KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'c41ef664-95fb-4c92-b743-3ffb21f7e776',
    submittedBy: 'rbraccin',
    time: '60ms',
    memory: '2949KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '40dbe094-3de8-4fb8-bb58-59a5be896fb6',
    submittedBy: 'gverrillo',
    time: '562ms',
    memory: '2676KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '9d78928d-a2e6-48c9-a143-ed3a338bc1a1',
    submittedBy: 'readmeadsp',
    time: '267ms',
    memory: '49KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '053b7dfc-ec88-4b57-9411-5c77fb820042',
    submittedBy: 'ataberq',
    time: '526ms',
    memory: '2746KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'd630b49f-a3e8-47ad-8b52-8e5e5118d481',
    submittedBy: 'mginnerr',
    time: '33ms',
    memory: '2529KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'c39464ad-7cee-4a41-b636-46072a1a0373',
    submittedBy: 'cmckerlies',
    time: '874ms',
    memory: '4513KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'a5b107b0-5cfa-4e7f-abdd-7f1170d559f8',
    submittedBy: 'cdawkest',
    time: '913ms',
    memory: '2758KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'df124b0f-cdac-41e9-b1be-bb9fc0a2df08',
    submittedBy: 'skohrsenu',
    time: '81ms',
    memory: '440KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'f8e2e93d-25d4-45c4-9c31-3a05c6a66c78',
    submittedBy: 'asadatv',
    time: '723ms',
    memory: '1990KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'c41446cb-e8e0-42e2-aa65-66ce42669606',
    submittedBy: 'atusonw',
    time: '447ms',
    memory: '1561KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '431674a2-93f2-469f-a081-05b43f8983d4',
    submittedBy: 'bscardefieldx',
    time: '245ms',
    memory: '3054KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '1316f6f4-879a-4f2c-81a2-c7ade7d50a7c',
    submittedBy: 'achittleburghy',
    time: '154ms',
    memory: '3904KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'add3ed49-4351-44d0-9db7-7b2d8460dfdb',
    submittedBy: 'kkilgallonz',
    time: '903ms',
    memory: '2641KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '89c3841e-4619-4c47-9005-8ac8df082776',
    submittedBy: 'rfosten10',
    time: '375ms',
    memory: '3089KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'a3c3182b-29a5-4896-b215-6ab7debcb594',
    submittedBy: 'mkirkbright11',
    time: '671ms',
    memory: '729KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '7251a839-ce2d-43f7-a07b-a5f77f20bebd',
    submittedBy: 'awaggitt12',
    time: '395ms',
    memory: '3399KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'e582faec-cdbc-4faa-b9df-0e29d4e64722',
    submittedBy: 'idrover13',
    time: '416ms',
    memory: '2383KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '9eaf6edc-0d69-436e-9599-0ffec224f574',
    submittedBy: 'hdowse14',
    time: '227ms',
    memory: '4150KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'a3476a3d-52a2-4413-8fa4-905fc89924d1',
    submittedBy: 'hhackett15',
    time: '978ms',
    memory: '4931KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'f9f6322c-e1b9-4e4e-a62e-83f838a2aef5',
    submittedBy: 'bseedull16',
    time: '923ms',
    memory: '1644KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'db6d035b-8da2-4b4e-8cce-c1ddc7f12ea7',
    submittedBy: 'emcconnachie17',
    time: '582ms',
    memory: '1910KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '0b9bf956-8a8e-4861-83e3-37448b4ad5c9',
    submittedBy: 'gcurtoys18',
    time: '878ms',
    memory: '1809KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'ecabf0b5-9b5c-4317-a905-582c69f1f5c7',
    submittedBy: 'dwraggs19',
    time: '70ms',
    memory: '2258KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '9076c302-0fdc-4159-9c33-250567ed728f',
    submittedBy: 'mharnott1a',
    time: '10ms',
    memory: '219KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '19dc265d-3cac-4aea-91e0-68a98f176375',
    submittedBy: 'rsmithyman1b',
    time: '610ms',
    memory: '2007KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: 'aff13499-b174-4f14-a5b5-3186c0130c2c',
    submittedBy: 'toret1c',
    time: '110ms',
    memory: '3664KB',
    title: 'This is the way',
    language: 'C++',
  },
  {
    id: '253861b0-9997-4aa1-bbf9-42441e7db022',
    submittedBy: 'nsendley1d',
    time: '686ms',
    memory: '1382KB',
    title: 'This is the way',
    language: 'C++',
  },
];
