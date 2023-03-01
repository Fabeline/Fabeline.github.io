export const isDamProduction =
   false;

export const mimeTypeMap = {
    svg: "image/svg+xml",
    png: "image/png",
    jpg: "image/jpg",
    pdf: "application/pdf",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    json: "application/json",
    csv: "text/csv"
};

const getShuffledDamProdImageId = () => {
    const prodIdList = ["Bhn6t6y7KcyAiYcA7TBKq9", "93In9w_v4eY8AaEED9zbPu"];
    // @ts-ignore
    return prodIdList[Math.floor(Math.random() * prodIdList.length)];
};

const getShuffledDamProdAudioId = () => {
    const prodIdList = ["BFdHufg5KtA8K9MLxFUies", "5nBeet6AamzA3RP_qtyoO_"];
    // @ts-ignore
    return prodIdList[Math.floor(Math.random() * prodIdList.length)];
};

const getShuffeledDamProdPdfId = () => {
    const prodIdList = ["FpMlmLKgaDLBKgJ4Dy70K-", "FpMlmLKgaDLBKgJ4Dy70K-"];
    return prodIdList[Math.floor(Math.random() * prodIdList.length)];
};

const getShuffeledDamProdJsonId = () => {
    // TODO: Add some geo to prod
    const prodIdList = ["FpMlmLKgaDLBKgJ4Dy70K-"];
    return prodIdList[Math.floor(Math.random() * prodIdList.length)];
};

const getShuffledDamProdWordId = () => {
    const prodIdList = ["Bjs5is53aIXBOpSys1ZfP8", "Bjs5is53aIXBOpSys1ZfP8"];
    return prodIdList[Math.floor(Math.random() * prodIdList.length)];
};

const getShuffledDamProdPowerPointId = () => {
    const prodIdList = ["FwGFErvvaIiBkqzy0VGPir", "FwGFErvvaIiBkqzy0VGPir"];
    return prodIdList[Math.floor(Math.random() * prodIdList.length)];
};

const getShuffledDamProdExcelId = () => {
    const prodIdList = ["E1pkkBZCKLG8N5a6KSIYad", "E1pkkBZCKLG8N5a6KSIYad"];
    return prodIdList[Math.floor(Math.random() * prodIdList.length)];
};

const getShuffledDamProdDamId = () => {
    const prodIdList = ["6PwXJgJwKt58-18V70oKzA", "6PwXJgJwKt58-18V70oKzA"];
    return prodIdList[Math.floor(Math.random() * prodIdList.length)];
};

// Provide dam prod id if you need to load a specific dam image in production
export const resolveImageId = (
    testId: string,
    prodId = getShuffledDamProdImageId()
) => {
    return isDamProduction ? prodId : testId;
};

//Provide dam prod id if you need to load a specific dam image in production
const resolveAudioId = (
    testId: string,
    prodId = getShuffledDamProdAudioId()
) => {
    return isDamProduction ? prodId : testId;
};

const resolvePdfId = (testId: string, prodId = getShuffeledDamProdPdfId()) => {
    return isDamProduction ? prodId : testId;
};

const resolveJsonId = (
    testId: string,
    prodId = getShuffeledDamProdJsonId()
) => {
    return isDamProduction ? prodId : testId;
};
const resolveWordId = (testId: string, prodId = getShuffledDamProdWordId()) => {
    return isDamProduction ? prodId : testId;
};
const resolvePowerPointId = (
    testId: string,
    prodId = getShuffledDamProdPowerPointId()
) => {
    return isDamProduction ? prodId : testId;
};
const resolveExcelId = (
    testId: string,
    prodId = getShuffledDamProdExcelId()
) => {
    return isDamProduction ? prodId : testId;
};
const resolveDamId = (testId: string, prodId = getShuffledDamProdDamId()) => {
    return isDamProduction ? prodId : testId;
};

export const damImageList = {
    moscus: {
        id: resolveImageId("6AJ0-TljKPHAKVvNEQfSkg"),
        mimeType: mimeTypeMap.jpg,
        altText: "Picture of moscus"
    },
    girlInSwing: {
        id: resolveImageId("2FCIlwtxKydBE37AwJ4Te8"),
        mimeType: mimeTypeMap.jpg,
        altText: "Picture of girl in swing"
    },
    squirrel: {
        id: resolveImageId("9eJwERe7KwJAKro0TKZMLm"),
        mimeType: mimeTypeMap.png,
        altText: "squirrel"
    },
    sheepsInLandscape: {
        id: resolveImageId("DSaBpBay4RZBw8zvSJ9KYR"),
        mimeType: mimeTypeMap.jpg,
        altText: "Sheeps in landscape"
    },
    svgText: {
        id: resolveImageId("3DhN3VqtqHN9kaaBijoQgc"),
        mimeType: mimeTypeMap.svg,
        altText: "Svg text"
    },
    darkImage: {
        id: resolveImageId("0OCe3poX4Ju8IKGAnd06TF"),
        mimeType: mimeTypeMap.jpg,
        altText: "Dark image"
    },
    whiteImage: {
        id: resolveImageId("Fs6VsJ784GSAPuaQN-7VQ5"),
        mimeType: mimeTypeMap.jpg,
        altText: "Dark image"
    }
};

export const damAudioList = {
    talk: {
        id: resolveAudioId("1w-ghjPeKDS922VSQ-Q7jv"),
        title: "English talk"
    }
};

export const damPdfList = {
    testPdf: {
        id: resolvePdfId("FpMlmLKgaDLBKgJ4Dy70K-"),
        mimeType: mimeTypeMap.pdf,
        title: "Pdf test 1"
    },
    linearized17MB: {
        id: resolvePdfId("FUP3lLplKmlA2Qclesl2S3"),
        mimeTypeMap: mimeTypeMap.pdf,
        title: "128MB linearized"
    },
    linearized128MB: {
        id: resolvePdfId("AAQpzB1Q4jh9wd4R5z_oMS"),
        mimeTypeMap: mimeTypeMap.pdf,
        title: "128MB linearized"
    },
    linearized135MB: {
        id: resolvePdfId("5puJ3iI_48Z8v7e9uDvmVZ"),
        mimeTypeMap: mimeTypeMap.pdf,
        title: "128MB linearized"
    },
    linearized579MB: {
        id: resolvePdfId("8DK_yojWq3JAeT13KjQFM0"),
        mimeTypeMap: mimeTypeMap.pdf,
        title: "579MB linearized"
    },
    saltoLinearizedChapter150dpi: {
        id: resolvePdfId("A-vZRwLjaiIBKn8n6uywR4"),
        mimeTypeMap: mimeTypeMap.pdf,
        title: "saltoLinearizedChapter150dpi"
    },
    saltoLinearizedFull150dpi: {
        id: resolvePdfId("7Tv9O5dyarkAIk0lFQg1EB"),
        mimeTypeMap: mimeTypeMap.pdf,
        title: "saltoLinearizedFull150dpi"
    },
    saltoLinearizedChapter72dpi: {
        id: resolvePdfId("AvS2iyVHaSkASKFki6F6tM"),
        mimeTypeMap: mimeTypeMap.pdf,
        title: "saltoLinearizedChapter72dpi"
    },
    saltoLinearizedFull72dpi: {
        id: resolvePdfId("4kw-5DgRafR9k06vp23KWF"),
        mimeTypeMap: mimeTypeMap.pdf,
        title: "saltoLinearizedFull72dpi"
    }
};

export const damJsonList = {
    testGeoJson: {
        id: resolveJsonId("AVK9caJ2KQ_9Cwevsw4jOn"),
        mimeType: mimeTypeMap.json,
        title: "Geojson test 1"
    }
};

export const damWordList = {
    testWord: {
        id: resolveWordId("Bjs5is53aIXBOpSys1ZfP8"),
        mimeType: mimeTypeMap.docx,
        title: "Word test 1"
    }
};

export const damPowerPointList = {
    testPowerPoint: {
        id: resolvePowerPointId("FwGFErvvaIiBkqzy0VGPir"),
        mimeType: mimeTypeMap.pptx,
        title: "PowerPoint test 1"
    }
};

export const damExcelList = {
    testExcel: {
        id: resolveExcelId("E1pkkBZCKLG8N5a6KSIYad"),
        mimeType: mimeTypeMap.xlsx,
        title: "Excel test 1"
    }
};

export const damCsvList = {
    testCsv: {
        id: resolveDamId("6PwXJgJwKt58-18V70oKzA"),
        mimeType: mimeTypeMap.csv,
        title: "CSV test 1"
    }
};
