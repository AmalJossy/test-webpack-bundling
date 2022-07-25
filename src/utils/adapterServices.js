import adapterMethodPA from '__BROKER_ADAPTERS__/adapterModuleP'
import adapterMethodQA from '__BROKER_ADAPTERS__/adapterModuleQ'

const adapterMethodPACopy =  adapterMethodPA;
const adapterMethodQACopy =  adapterMethodQA;

export { adapterMethodPACopy as adapterMethodPA }
export { adapterMethodQACopy as adapterMethodQA }