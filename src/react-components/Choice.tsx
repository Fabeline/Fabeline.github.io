import React, {useEffect} from "react";
import {SectionLoader} from "./SectionLoader";
import type {SectionProps} from "../types/SectionTypes";
import {LanguageCodes} from "../types/SectionTypes";
import {
    InstructionType,
    PickupType,
    PodiumContentType,
    RobiBackgroundColor,
    RobiCodeMode,
    RobiThemeName
} from "../types/RobiTypes";
import {ChoiceVariant} from "../types/ChoiceTypes";
import {damAudioList} from "./dam-resources";


export const Choice: React.FunctionComponent<SectionProps> = props => {
    return <SectionLoader
        userId={"userUuid"}
        activitySectionId={"activitySection.id"}
        activityId={"selectedActivity.id"}
        activityRevisionId={"activityRevisionId"}
        activityUpdatedDate={"selectedActivity.updatedDate"}
        languageCode={LanguageCodes.norsk}
        element={"sc-choice"}
        sectionAnswer={null}
        data={{
            enableValidation: true,
            variant: ChoiceVariant.multipleSimple,
            disableSelection: false,
            answers: [
                {
                    text: "Pippilotta Viktualia Rullgardina Chrysmynta Efraimsdatter Langstrømpe",
                    isCorrect: true,
                    audio: {
                        id: damAudioList.talk.id,
                        contentType: PodiumContentType.audio
                    },
                    audioAltText: "audio alt text comes here"
                },
                {
                    text: "Marie Curie",
                    isCorrect: true
                },
                {
                    text: "Napoleon",
                    isCorrect: false
                },
                {
                    text: "Nikola Tesla",
                    isCorrect: true
                }
            ]
        }}
        onInit={() => {}}
        reportAnswer={() => {}}
        reportValidatedAnswer={() => undefined}
        answerFileApi={null}
        hideAttribution={false}
        showSolution={false}
    />
};
