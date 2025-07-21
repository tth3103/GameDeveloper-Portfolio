import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "TRUONG TUAN HAO",
  role: "GAME DEVELOPER",
  introduction: "I’m an enthusiastic game developer driven by a passion for crafting immersive and interactive experiences. Specializing in Unity, I love bringing unique game concepts to life and delivering memorable adventures for players.",
  description: "Hey, I'm Hao! I have been passionate about gaming my entire life, and creating games has always been my dream. My goal is to develop games that people enjoy, whether they are casual mobile games, large MMORPGs for thousands of players, or just a simple puzzle games. Currently, I’m seeking opportunities to join a company where I can sharpen my skills, learn from experienced colleagues, and create some amazing games.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/CV-Truong-Tuan-Hao.pdf`,
  links: {
    github: "https://github.com/tth3103",
    itchIO: "https://scrappynotcrappy.itch.io/",
    linkedIn: "www.linkedin.com/in/hao-truong-aa1427256",
  }
};

export const games: Game[] = [
  {
    name: "Starry-Venture",
    description: "As a lone explorer venturing through the vast unknown of space, your mission is simple: discover the wonders of the galaxy while trying to stay alive!",
    genres: ["HYPERCASUAL"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/tth3103/Starry-Venture" },
      { source: LinkImageSource.ItchIo, url: "https://scrappynotcrappy.itch.io/starry-venture" },
    ],
    media: [
      { source: "/images/games/Starry-Venture/Starry-Venture-Screenshot-01.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/ftXVuMwula8", type: MediaType.YouTube },
      { source: "/images/games/Starry-Venture/Screenshot-02.png", type: MediaType.Image },
      { source: "/images/games/Starry-Venture/Screenshot-03.png", type: MediaType.Image },
      { source: "/images/games/Starry-Venture/Screenshot-04.png", type: MediaType.Image },
      { source: "/images/games/Starry-Venture/Screenshot-05.png", type: MediaType.Image },
    ],
  },
  {
    name: "Feast-Or-Famine",
    description: "Solve the little rabbit from crisis by helping it arrange the vegetables in place",
    genres: ["Casual", "Puzzle"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/tth3103/Feast-or-Famine" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/Feast-Or-Famine/Screenshot-01.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/ZeIoL0cD10g", type: MediaType.YouTube },
      { source: "/images/games/Feast-Or-Famine/Screenshot-02.png", type: MediaType.Image },
      { source: "/images/games/Feast-Or-Famine/Screenshot-03.png", type: MediaType.Image },
      { source: "/images/games/Feast-Or-Famine/Screenshot-04.png", type: MediaType.Image },
    ],
  }
];