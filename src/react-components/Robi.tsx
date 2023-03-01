import React, {useEffect} from "react";
import {SectionLoader} from "./SectionLoader";
import type {SectionProps} from "../types/SectionTypes";
import {LanguageCodes} from "../types/SectionTypes";
import {InstructionType, PickupType, RobiBackgroundColor, RobiCodeMode, RobiThemeName} from "../types/RobiTypes";

export const Robi: React.FunctionComponent<SectionProps> = props => {
    return <SectionLoader
        userId={"userUuid"}
        activitySectionId={"activitySection.id"}
        activityId={"selectedActivity.id"}
        activityRevisionId={"activityRevisionId"}
        activityUpdatedDate={"selectedActivity.updatedDate"}
        languageCode={LanguageCodes.norsk}
        element={"sc-robi"}
        sectionAnswer={null}
        data={{
            theme: RobiThemeName.forest,
            backgroundColor: RobiBackgroundColor.lightgreen,
            background: [
                ["6", "6", "1", "1"],
                ["0", "6", "6", "6"],
                ["0", "7", "6", "6"]
            ],
            obstacles: [
                [" ", "p", " ", "x"],
                [" ", " ", "1", " "],
                ["a", " ", " ", "o"]
            ],
            availableInstructionTypes: [
                InstructionType.Up,
                InstructionType.Down,
                InstructionType.Left,
                InstructionType.Right,
                InstructionType.Function,
                InstructionType.FunctionPointer,
                InstructionType.Condition,
                InstructionType.For
            ],
            pickups: ["1"],
            pickupTypes: [PickupType.can],
            mode: RobiCodeMode.icon,
            memorySlots: 5,
            random: false,
            solutions: [
                {
                    instructions: [
                        {
                            id: "1",
                            type: InstructionType.Down,
                            data: {
                                type: InstructionType.Down
                            }
                        },
                        {
                            id: "2",
                            type: InstructionType.Right,
                            data: {
                                type: InstructionType.Right
                            }
                        },
                        {
                            id: "3",
                            type: InstructionType.Up,
                            data: {
                                type: InstructionType.Up
                            }
                        },
                        {
                            id: "4",
                            type: InstructionType.Right,
                            data: {
                                type: InstructionType.Right
                            }
                        },
                        {
                            id: "5",
                            type: InstructionType.Empty,
                            data: {
                                type: InstructionType.Empty
                            }
                        }
                    ],
                    functions: [],
                    hasFinished: true
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
