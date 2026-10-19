const words = [
  {
    id: '1',
    word: 'perseverance',
    phonetic: '/ˌpɜːrsəˈvɪrəns/',
    meaning: '坚持不懈；不屈不挠',
    example: 'Success requires perseverance and hard work. 💪',
    mnemonic: 'per-se-ver-ance → 每一份努力都算数！',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    difficulty: 'hard',
    category: 'cet6',
  },
  {
    id: '2',
    word: 'vibe',
    phonetic: '/vaɪb/',
    meaning: '氛围；感觉；气场',
    example: 'This café has such a chill vibe! ☕',
    mnemonic: 'vibe → 听起来就很有感觉～',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    difficulty: 'easy',
    category: 'daily',
  },
  {
    id: '3',
    word: 'ephemeral',
    phonetic: '/ɪˈfemərəl/',
    meaning: '短暂的；瞬息的',
    example: 'Cherish the ephemeral moments of happiness. 🌸',
    mnemonic: 'e-phe-mer-al → 一瞬而过的美好',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
    difficulty: 'hard',
    category: 'postgraduate',
  },
  {
    id: '4',
    word: 'slay',
    phonetic: '/sleɪ/',
    meaning: '表现超棒；碾压全场',
    example: 'You totally slayed that presentation! 🔥',
    mnemonic: 'slay → 杀疯了！太厉害了！',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop',
    difficulty: 'easy',
    category: 'daily',
  },
  {
    id: '5',
    word: 'serendipity',
    phonetic: '/ˌserənˈdɪpɪti/',
    meaning: '意外发现珍奇事物的本领；机缘凑巧',
    example: 'Finding that old photo was pure serendipity! ✨',
    mnemonic: 'ser-en-dip-i-ty → 美丽的意外发现',
    image:
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
    difficulty: 'hard',
    category: 'cet6',
  },
  {
    id: '6',
    word: 'resilience',
    phonetic: '/rɪˈzɪliəns/',
    meaning: '韧性；恢复力；适应力',
    example: 'Resilience is key to overcoming challenges. 🌱',
    mnemonic: 're-sil-i-ence → 像弹簧一样弹回来',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    difficulty: 'medium',
    category: 'cet4',
  },
  {
    id: '7',
    word: 'main character energy',
    phonetic: '/meɪn ˈkærəktər ˈenərdʒi/',
    meaning: '主角气场；大女主/男主范儿',
    example: 'Walk into the room with main character energy! 👑',
    mnemonic: '主角 + 能量 → 自带光环',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop',
    difficulty: 'easy',
    category: 'daily',
  },
  {
    id: '8',
    word: 'vibe check',
    phonetic: '/vaɪb tʃek/',
    meaning: '氛围检查；气场验证',
    example: "Let's do a quick vibe check before we start! ✌️",
    mnemonic: 'vibe + check → 确认一下感觉对不对',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    difficulty: 'easy',
    category: 'daily',
  },
];
const questions = [
  {
    id: '1',
    type: 'vocabulary',
    question: 'Choose the best synonym for "perseverance":',
    options: ['Persistence', 'Indifference', 'Impatience', 'Distraction'],
    answer: 0,
    explanation:
      'Perseverance means continuing to try despite difficulties, which is similar to persistence! 💪',
    category: 'cet6',
  },
  {
    id: '2',
    type: 'vocabulary',
    question: 'What does "serendipity" mean?',
    options: [
      'A sad feeling',
      'A lucky discovery',
      'A loud noise',
      'A fast movement',
    ],
    answer: 1,
    explanation:
      'Serendipity is when you find something wonderful by accident! ✨',
    category: 'cet6',
  },
  {
    id: '3',
    type: 'vocabulary',
    question: 'Which word describes something that lasts a very short time?',
    options: ['Eternal', 'Ephemeral', 'Permanent', 'Endless'],
    answer: 1,
    explanation: 'Ephemeral means lasting for a very short time! 🌸',
    category: 'postgraduate',
  },
  {
    id: '4',
    type: 'vocabulary',
    question: 'What is the meaning of "resilience"?',
    options: [
      'Fragility',
      'Vulnerability',
      'Ability to recover quickly',
      'Weakness',
    ],
    answer: 2,
    explanation:
      'Resilience is the capacity to recover quickly from difficulties! 🌱',
    category: 'cet4',
  },
  {
    id: '5',
    type: 'reading',
    question:
      'Read this passage: "The ______ beauty of cherry blossoms reminds us to appreciate the present moment."',
    options: ['eternal', 'ephemeral', 'permanent', 'constant'],
    answer: 1,
    explanation:
      'Cherry blossoms are famous for their brief blooming period! 🌸',
    category: 'cet6',
  },
];
const dialogues = [
  {
    id: '1',
    scene: '☕ 咖啡馆闲聊',
    lines: [
      {
        speaker: 'A',
        text: 'Hey! This place has such a cool vibe!',
        translation: '嘿！这地方氛围也太好了吧！',
      },
      {
        speaker: 'B',
        text: 'Right? I love the aesthetic here. Perfect for studying.',
        translation: '对吧？我超爱这里的风格，特别适合学习。',
      },
      {
        speaker: 'A',
        text: 'Want to grab a coffee later and practice our English?',
        translation: '待会儿要不要一起喝咖啡，顺便练习英语？',
      },
      {
        speaker: 'B',
        text: "Sounds like a plan! Let's do it! ✨",
        translation: '听起来很棒！就这么定了！✨',
      },
    ],
  },
  {
    id: '2',
    scene: '🎉 派对交友',
    lines: [
      {
        speaker: 'A',
        text: 'Wow, you totally slayed that outfit tonight!',
        translation: '哇，你今天这身也太好看了吧！',
      },
      {
        speaker: 'B',
        text: 'Thank you! I was feeling the main character energy tonight!',
        translation: '谢谢！今天我就是主角！👑',
      },
      {
        speaker: 'A',
        text: 'Haha, love that confidence! Where are you from?',
        translation: '哈哈，爱了这份自信！你是哪里人？',
      },
      {
        speaker: 'B',
        text: "I'm from China, just here studying abroad. Nice to meet you!",
        translation: '我来自中国，在这里留学。很高兴认识你！',
      },
    ],
  },
  {
    id: '3',
    scene: '📚 学习搭档',
    lines: [
      {
        speaker: 'A',
        text: 'Hey, do you want to study for the CET-4 together?',
        translation: '嘿，要不要一起准备四级考试？',
      },
      {
        speaker: 'B',
        text: 'Definitely! I need someone to keep me accountable.',
        translation: '必须的！我需要有人监督我学习。',
      },
      {
        speaker: 'A',
        text: 'Great! Remember, perseverance is key!',
        translation: '太好了！记住，坚持就是胜利！',
      },
      {
        speaker: 'B',
        text: "You're right! Let's ace this exam together! 💪",
        translation: '说得对！我们一起拿下这个考试！💪',
      },
    ],
  },
  {
    id: '4',
    scene: '🎨 艺术展偶遇',
    lines: [
      {
        speaker: 'A',
        text: "This exhibition is amazing! What's your favorite piece?",
        translation: '这个展览太棒了！你最喜欢哪个作品？',
      },
      {
        speaker: 'B',
        text: 'I love that painting over there. It gives me such warm vibes.',
        translation: '我喜欢那边那幅画，给我一种很温暖的感觉。',
      },
      {
        speaker: 'A',
        text: 'Same here! It reminds me of serendipitous moments.',
        translation: '我也是！它让我想到那些美好的意外发现。',
      },
      {
        speaker: 'B',
        text: 'Meeting you here feels like serendipity too! 😊',
        translation: '在这里遇见你也像是一种缘分呢！😊',
      },
    ],
  },
];
