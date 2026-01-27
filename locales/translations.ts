// Import common translations
import { commonEn, commonZh } from './pages/common'

// Import project page translations
import { idoCmsEn, idoCmsZh } from './pages/ido-cms'
import { tgballersEn, tgballersZh } from './pages/tgballers'
import { ivarRedesignEn, ivarRedesignZh } from './pages/ivar-redesign'
import { faceLibraryEn, faceLibraryZh } from './pages/face-library'
import { dataVisualizationEn, dataVisualizationZh } from './pages/data-visualization'
import { idoWorkflowEn, idoWorkflowZh } from './pages/ido-workflow'
import { pankoMascotEn, pankoMascotZh } from './pages/panko-mascot'
import { videoAnalysisEn, videoAnalysisZh } from './pages/video-analysis'
import { vodChannelEn, vodChannelZh } from './pages/vod-channel'
import { chromecastEn, chromecastZh } from './pages/chromecast'

export const translations = {
  en: {
    // Common translations (nav, hero, work, about, cta, footer)
    ...commonEn,
    // Project page translations
    idoCms: idoCmsEn,
    tgballers: tgballersEn,
    ivarRedesign: ivarRedesignEn,
    faceLibrary: faceLibraryEn,
    dataVisualization: dataVisualizationEn,
    idoWorkflow: idoWorkflowEn,
    pankoMascot: pankoMascotEn,
    videoAnalysis: videoAnalysisEn,
    vodChannel: vodChannelEn,
    chromecast: chromecastEn,
  },
  zh: {
    // Common translations (nav, hero, work, about, cta, footer)
    ...commonZh,
    // Project page translations
    idoCms: idoCmsZh,
    tgballers: tgballersZh,
    ivarRedesign: ivarRedesignZh,
    faceLibrary: faceLibraryZh,
    dataVisualization: dataVisualizationZh,
    idoWorkflow: idoWorkflowZh,
    pankoMascot: pankoMascotZh,
    videoAnalysis: videoAnalysisZh,
    vodChannel: vodChannelZh,
    chromecast: chromecastZh,
  },
}

export type Locale = keyof typeof translations
export type TranslationKeys = typeof translations.en
