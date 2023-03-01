
export enum SectionElement {
    AudioRecorder = "sc-audio-recorder",
    CardCarousel = "sc-card-carousel",
    FeatureHeader = "sc-feature-header",
    Blackboard = "sc-blackboard-prototype"
}

export interface ReportedConfig {
    isExercise: boolean;
    preventValidation?: boolean;
}

export interface ValidatedSectionAnswer<T> {
    score: number;
    maxScore: number;
    sectionAnswer: T;
}

export enum LanguageCodes {
    english = "en-gb",
    norsk = "nb-no",
    nynorsk = "nn-no"
}

export type ValidateSection = (displayValidation: boolean) => Promise<ValidatedSectionAnswer<any>>;

export interface SectionProps {
    userId: string;
    element: string;
    data: any;
    sectionAnswer?: any;
    reportAnswer: (answer: any) => void;
    reportValidatedAnswer: (validatedAnswer: ValidatedSectionAnswer<any>) => void;
    onInit: (reportedConfig: ReportedConfig, validateSection: ValidateSection) => void;
    languageCode?: LanguageCodes;
    activityId: string;
    activityRevisionId?: string;
    activitySectionId: string;
    activityUpdatedDate: string;
    hideAttribution: boolean;
    showSolution: boolean;
    answerFileApi: any
}
