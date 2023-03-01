
export enum PodiumContentType {
    image = "podium-media.image",
    video = "podium-media.video",
    audio = "podium-media.audio",
    file = "podium-media.file"
}
export interface Media {
    id?: string;
    mimeType?: string;
    crop?: string;
    url?: string;
    contentType: PodiumContentType;
}
export enum RobiCharacter {
    "Robi" = "Robi",
    "Musti" = "Musti"
}

export enum RobiImages {
    "musti" = "robi/musti-cartoon-right.png",
    "robi" = "robi/robi-cartoon-head.png"
}

export interface RobiInfo {
    character: RobiCharacter;
    text: string;
    showCharacterName?: boolean;
    audio?: Media;
}

export type TileChar =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10";

export enum PickupType {
    "can" = "can",
    "garbage" = "garbage",
    "fender" = "fender",
    "mobile" = "mobile",
    "cup" = "cup"
}

export type ObstacleChar =
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"
    | "t"
    | " "
    | "x"
    | "g"
    | "h"
    | "p"
    | "o"
    | "w"
    | "s"
    | "i"
    | "j"
    | "k"
    | "l"
    | "m"
    | "n"
    | "r"
    | "u"
    | "v"
    | "y"
    | "q"
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9";

export enum RobiCodeMode {
    icon = "icon",
    text = "text",
    code = "code"
}

export interface FunctionInstruction {
    name: string;
    startPos: number;
    endPos: number;
}

export interface FunctionPointer {
    pointingTo: string;
}

export interface ForInstruction {
    count: number;
    startPos: number;
    endPos: number;
    currentCount: number;
}

export interface ConditionInstruction {
    if: Condition;
    value?: TileChar;
    startPos: number;
    endPos: number;
}

export interface UpInstruction {
    type: InstructionType.Up;
}

export interface DownInstruction {
    type: InstructionType.Down;
}

export interface EmptyInstruction {
    type: InstructionType.Empty;
}

export interface LeftInstruction {
    type: InstructionType.Left;
}

export interface RightInstruction {
    type: InstructionType.Right;
}

//Not supported yet
export interface WhileInstruction {
    type: InstructionType.While;
}

export enum Condition {
    //"next-to-tile" = "next-to-tile",
    "standing-on-tile" = "standing-on-tile"
}

export interface Instruction<T> {
    type: InstructionType;
    id: string;
    data: T;
}

export enum InstructionType {
    Up = "Up",
    Left = "Left",
    Right = "Right",
    Down = "Down",
    For = "For",
    While = "While",
    Function = "Function",
    FunctionPointer = "FunctionPointer",
    Condition = "Condition",
    Empty = "Empty"
}

export type AnyInstruction =
    | UpInstruction
    | DownInstruction
    | LeftInstruction
    | RightInstruction
    | ForInstruction
    | WhileInstruction
    | FunctionInstruction
    | FunctionPointer
    | ConditionInstruction
    | EmptyInstruction;

export enum RobiBackgroundColor {
    "yellow" = "yellow",
    "gray" = "gray",
    "white" = "white",
    "lightblue" = "lightblue",
    "purple" = "purple",
    "lightgreen" = "lightgreen",
    "pink" = "pink",
    "transparent" = "transparent",
    "half-transparent" = "half-transparent"
}

export interface LevelData {
    background: TileChar[][];
    obstacles: ObstacleChar[][];
    availableInstructionTypes: InstructionType[];
    mode: RobiCodeMode;
    pickups?: string[];
    pickupTypes?: PickupType[];
    pickupInOrder?: boolean;
    backgroundColor: RobiBackgroundColor;
    memorySlots: number;
    random?: boolean;
    roundCorners?: boolean;
    boxShadow?: boolean;
    theme?: RobiThemeName;
    intro?: RobiInfo;
    outro?: RobiInfo;
    emojiVariableNames?: boolean;
    showTextCode?: boolean;
    solutions?: RobiAnswerConfig[]; //This is an array in case we want to support multiple solutions in the future
    textOnly?: boolean;
}

export enum RobiThemeName {
    "desert" = "desert",
    "water" = "water",
    "forest" = "forest",
    "city" = "city"
}

export interface RobiTheme {
    background: string;
    obstacle?: string;
    backgroundColor: string;
    name: string;
}

type RobiThemesType = {
    [key in RobiThemeName]: RobiTheme;
};

export enum ObstacleAnimation {
    "floating" = "floating-wrapper",
    "grow-shrink" = "grow-shrink-wrapper",
    "wobbling" = "wobbling-wrapper",
    "burning" = "burning-wrapper"
}

export const robiThemes: RobiThemesType = {
    desert: {
        name: "desert",
        background: "robi/background-desert2.svg",
        obstacle: "robi/tree.svg",
        backgroundColor: "#eba981ff"
    },
    forest: {
        name: "forest",
        background: "robi/background-forest.svg",
        obstacle: "robi/pine.svg",
        backgroundColor: "#7ff0af"
    },
    water: {
        name: "water",
        background: "robi/background-sea.svg",
        obstacle: undefined,
        backgroundColor: "#a2bffeff"
    },
    city: {
        name: "city",
        background: "robi/background-city.png",
        obstacle: "robi/newspaper.svg",
        backgroundColor: "#878787"
    }
};

export interface RobiObstacle {
    image: string;
    character: ObstacleChar;
    animation?: ObstacleAnimation;
    type: string;
    skew?: boolean;
    description: string;
    deprecated?: boolean;
}

export interface RobiTile {
    character: string;
    description: string;
    robiScriptNames: string[]; //NOTE: first element is english, then bokmål and then nynorsk
}

export interface RobiTiles {
    [key: string]: RobiTile;
}

//TODO rmg: legg til nynorsk
//TODO rmg: brukes description lenger?
export const robiTiles: RobiTiles = {
    "0": {
        character: "0",
        description: "Clay",
        robiScriptNames: ["clay", "leire", "leire"]
    },
    "1": {
        character: "1",
        description: "Dirt",
        robiScriptNames: ["dirt", "grusvei", "grusveg"]
    },
    "2": {
        character: "2",
        description: "Lake",
        robiScriptNames: ["lake", "sjø", "sjø"]
    },
    "3": {
        character: "3",
        description: "River",
        robiScriptNames: ["river", "elv", "elv"]
    },
    "4": {
        character: "4",
        description: "Bricks",
        robiScriptNames: ["bricks", "murstein", "murstein"]
    },
    "5": {
        character: "5",
        description: "Road",
        robiScriptNames: ["road", "asfalt", "asfalt"]
    },
    "6": {
        character: "6",
        description: "Grass",
        robiScriptNames: ["grass", "gress", "gress"]
    },
    "7": {
        character: "7",
        description: "Meadow",
        robiScriptNames: ["meadow", "lysning", "lysning"]
    },
    "8": {
        character: "8",
        description: "Sand",
        robiScriptNames: ["sand", "sand", "sand"]
    },
    "9": {
        character: "9",
        description: "Magic",
        robiScriptNames: ["magic", "magi", "magi"]
    },
    "10": {
        character: "10",
        description: "Tracks",
        robiScriptNames: ["tracks", "spor", "spor"]
    }
};

export interface RobiObstacles {
    [key: string]: RobiObstacle;
}

export const robiObstacles: RobiObstacles = {
    variablus: {
        image: "variablus.svg",
        character: "y",
        type: "variablus",
        description: "VariablusReadingPaper"
    },
    sign: {
        image: "sign.svg",
        character: "v",
        type: "sign",
        description: "TrafficSign"
    },
    statue: {
        image: "statue.svg",
        character: "u",
        type: "statue",
        description: "AlienStatue"
    },
    berry: {
        image: "berry.svg",
        character: "r",
        type: "berry",
        description: "YellowFlower"
    },
    shipwreck: {
        image: "shipwreck.svg",
        character: "f",
        type: "shipwreck",
        description: "Shipwreck"
    },
    redMushroom: {
        image: "red-mushroom.svg",
        character: "o",
        type: "redMushroom",
        description: "RedMushroom"
    },
    cactus: {
        image: "cactus.svg",
        character: "t",
        animation: ObstacleAnimation.floating,
        type: "cactus",
        description: "HoveringCactus"
    },
    trashCan: {
        image: "trash-can.svg",
        character: "x",
        type: "trashCan",
        description: "TrashCan"
    },
    sprout: {
        image: "sprout.png",
        character: "q",
        type: "sprout",
        animation: ObstacleAnimation["grow-shrink"],
        description: "NotAvailable",
        deprecated: true
    },
    blueMushroom: {
        image: "blue-mushroom.svg",
        character: "n",
        type: "blueMushroom",
        description: "BlueMushroom"
    },
    spaghetti: {
        image: "spaghetti.svg",
        character: "m",
        type: "spaghetti",
        animation: ObstacleAnimation["grow-shrink"],
        description: "WobblingEyePlant"
    },
    tree: {
        image: "dark-tree.svg",
        character: "k",
        type: "tree",
        description: "DeadTree"
    },
    twoStones: {
        image: "two-stones.svg",
        character: "j",
        type: "twoStones",
        skew: true,
        description: "NotAvailable",
        deprecated: true
    },
    threeStones: {
        image: "three-stones.svg",
        character: "i",
        type: "threeStones",
        skew: true,
        description: "NotAvailable",
        deprecated: true
    },
    flame: {
        image: "flame.svg",
        character: "s",
        type: "flame",
        animation: ObstacleAnimation["burning"],
        description: "BurningFlame"
    },
    poop: {
        image: "poop.svg",
        character: "h",
        type: "poop",
        description: "SmilingPoop"
    },
    pearlPlant: {
        image: "pearl-plant.svg",
        character: "w",
        type: "pearlPlant",
        description: "PearlPlant"
    },
    grass: {
        image: "grass.svg",
        character: "g",
        type: "grass",
        animation: ObstacleAnimation.wobbling,
        description: "WavingGrass"
    },
    pine: {
        image: "pine.svg",
        character: "a",
        type: "pine",
        description: "Spruce"
    },
    mushroomBrown: {
        image: "brown-mushroom.svg",
        character: "b",
        type: "mushroomBrown",
        description: "BrownMushroom"
    },
    spikePlant: {
        image: "spike-plant.svg",
        character: "c",
        type: "spikePlant",
        description: "BlueFlower"
    },
    skeleton: {
        image: "skeleton.svg",
        character: "d",
        type: "skeleton",
        description: "FishSkeleton"
    },
    lantern: {
        image: "lantern.svg",
        character: "e",
        type: "lantern",
        description: "Lantern"
    },
    rock: {
        image: "rock.svg",
        character: "l",
        type: "rock",
        description: "BigRock"
    }
};

export const hardObstacles = [
    robiObstacles.berry.character,
    robiObstacles.rock.character,
    robiObstacles.shipwreck.character,
    robiObstacles.lantern.character,
    robiObstacles.skeleton.character,
    robiObstacles.redMushroom.character,
    robiObstacles.pearlPlant.character,
    robiObstacles.grass.character,
    robiObstacles.poop.character,
    robiObstacles.flame.character,
    robiObstacles.tree.character,
    robiObstacles.spaghetti.character,
    robiObstacles.blueMushroom.character,
    robiObstacles.sprout.character,
    robiObstacles.cactus.character,
    robiObstacles.pine.character,
    robiObstacles.mushroomBrown.character,
    robiObstacles.spikePlant.character,
    robiObstacles.statue.character,
    robiObstacles.sign.character,
    robiObstacles.variablus.character,
    "-" //Crashing in wall
];

export type RobiConfig = LevelData;

//Quickfix for robi validation errors
//Robi has frontend validation, and therefore only need the "hasFinished" attribute
export interface RobiAnswerConfigForValidation {
    hasFinished: boolean;
    instructions?: any;
    functions?: any;
}

export interface RobiAnswerConfig {
    hasFinished: boolean;
    instructions: Instruction<AnyInstruction>[];
    functions: Instruction<FunctionInstruction>[];
    textCode?: string;
    textMode?: boolean;
}

//not currently in use
export enum RobiColor {
    "pink" = "hue-rotate(270deg)",
    "orange" = "none",
    "green" = "hue-rotate(70deg)",
    "blue" = "hue-rotate(190deg)"
}
