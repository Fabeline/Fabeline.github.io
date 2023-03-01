import React, {useEffect} from "react";
import {SectionLoader} from "./SectionLoader";
import type {SectionProps} from "../types/SectionTypes";
import {LanguageCodes} from "../types/SectionTypes";
import {InstructionType, PickupType, RobiBackgroundColor, RobiCodeMode, RobiThemeName} from "../types/RobiTypes";

interface Props {
  data: any,
  section: string
}

export const Section: React.FunctionComponent<Props> = props => {
    return <SectionLoader
        userId={"userUuid"}
        activitySectionId={"activitySection.id"}
        activityId={"selectedActivity.id"}
        activityRevisionId={"activityRevisionId"}
        activityUpdatedDate={"selectedActivity.updatedDate"}
        languageCode={LanguageCodes.norsk}
        element={props.section}
        sectionAnswer={null}
        data={props.data}
        onInit={() => {}}
        reportAnswer={() => {}}
        reportValidatedAnswer={() => undefined}
        answerFileApi={null}
        hideAttribution={false}
        showSolution={false}
    />
};
