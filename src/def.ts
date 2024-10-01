// @ts-nocheck

/**
 * Generated file - DO NOT EDIT
 *
 * source: http://www.llrp.org/ltk/schema/core/encoding/binary/1.0
 *
 * LLRP Type Definitions
 */

const LLRP_NAMESPACE = {
  prefix: 'llrp',
  uri: 'https://llrpjs.github.io/schema/core/encoding/json/1.0',
  schemaLocation: 'https://llrpjs.github.io/schema/core/encoding/json/1.0/llrp-1x0.schema.json',
} as const

// Parameters

const LLRP_TD_UTCTimestamp = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'UTCTimestamp',
  typeNum: 128,

  fieldDescriptors: [
    {
      name: 'Microseconds',
      type: 'u64',
      format: 'Datetime',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_Uptime = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'Uptime',
  typeNum: 129,

  fieldDescriptors: [
    {
      name: 'Microseconds',
      type: 'u64',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_Custom = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'Custom',
  typeNum: 1023,

  fieldDescriptors: [
    {
      name: 'VendorIdentifier',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ParameterSubtype',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Data',
      type: 'bytesToEnd',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_GeneralDeviceCapabilities = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'GeneralDeviceCapabilities',
  typeNum: 137,

  fieldDescriptors: [
    {
      name: 'MaxNumberOfAntennaSupported',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'CanSetAntennaProperties',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'HasUTCClockCapability',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 14,
    },
    {
      name: 'DeviceManufacturerName',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ModelName',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ReaderFirmwareVersion',
      type: 'utf8v',
      format: 'UTF8',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'ReceiveSensitivityTableEntry',
      repeat: '1-N',
      choices: [] as const,
    },
    {
      td: 'PerAntennaReceiveSensitivityRange',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'GPIOCapabilities',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'PerAntennaAirProtocol',
      repeat: '1-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ReceiveSensitivityTableEntry = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ReceiveSensitivityTableEntry',
  typeNum: 139,

  fieldDescriptors: [
    {
      name: 'Index',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ReceiveSensitivityValue',
      type: 's16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_PerAntennaReceiveSensitivityRange = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'PerAntennaReceiveSensitivityRange',
  typeNum: 149,

  fieldDescriptors: [
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ReceiveSensitivityIndexMin',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ReceiveSensitivityIndexMax',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_PerAntennaAirProtocol = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'PerAntennaAirProtocol',
  typeNum: 140,

  fieldDescriptors: [
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ProtocolID',
      type: 'u8v',
      format: 'Normal',
      enumTable: [
        {
          name: 'Unspecified',
          value: 0,
        },
        {
          name: 'EPCGlobalClass1Gen2',
          value: 1,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_GPIOCapabilities = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'GPIOCapabilities',
  typeNum: 141,

  fieldDescriptors: [
    {
      name: 'NumGPIs',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'NumGPOs',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_LLRPCapabilities = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'LLRPCapabilities',
  typeNum: 142,

  fieldDescriptors: [
    {
      name: 'CanDoRFSurvey',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'CanReportBufferFillWarning',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'SupportsClientRequestOpSpec',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'CanDoTagInventoryStateAwareSingulation',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'SupportsEventAndReportHolding',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 3,
    },
    {
      name: 'MaxNumPriorityLevelsSupported',
      type: 'u8',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ClientRequestOpSpecTimeout',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MaxNumROSpecs',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MaxNumSpecsPerROSpec',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MaxNumInventoryParameterSpecsPerAISpec',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MaxNumAccessSpecs',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MaxNumOpSpecsPerAccessSpec',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_RegulatoryCapabilities = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'RegulatoryCapabilities',
  typeNum: 143,

  fieldDescriptors: [
    {
      name: 'CountryCode',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'CommunicationsStandard',
      type: 'u16',
      format: 'Normal',
      enumTable: [
        {
          name: 'Unspecified',
          value: 0,
        },
        {
          name: 'US_FCC_Part_15',
          value: 1,
        },
        {
          name: 'ETSI_302_208',
          value: 2,
        },
        {
          name: 'ETSI_300_220',
          value: 3,
        },
        {
          name: 'Australia_LIPD_1W',
          value: 4,
        },
        {
          name: 'Australia_LIPD_4W',
          value: 5,
        },
        {
          name: 'Japan_ARIB_STD_T89',
          value: 6,
        },
        {
          name: 'Hong_Kong_OFTA_1049',
          value: 7,
        },
        {
          name: 'Taiwan_DGT_LP0002',
          value: 8,
        },
        {
          name: 'Korea_MIC_Article_5_2',
          value: 9,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'UHFBandCapabilities',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_UHFBandCapabilities = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'UHFBandCapabilities',
  typeNum: 144,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'TransmitPowerLevelTableEntry',
      repeat: '1-N',
      choices: [] as const,
    },
    {
      td: 'FrequencyInformation',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'AirProtocolUHFRFModeTable',
      repeat: '1-N',
      choices: ['C1G2UHFRFModeTable'] as const,
    },
  ] as const,
} as const

const LLRP_TD_TransmitPowerLevelTableEntry = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'TransmitPowerLevelTableEntry',
  typeNum: 145,

  fieldDescriptors: [
    {
      name: 'Index',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'TransmitPowerValue',
      type: 's16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_FrequencyInformation = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'FrequencyInformation',
  typeNum: 146,

  fieldDescriptors: [
    {
      name: 'Hopping',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'FrequencyHopTable',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'FixedFrequencyTable',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_FrequencyHopTable = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'FrequencyHopTable',
  typeNum: 147,

  fieldDescriptors: [
    {
      name: 'HopTableID',
      type: 'u8',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 8,
    },
    {
      name: 'Frequency',
      type: 'u32v',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_FixedFrequencyTable = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'FixedFrequencyTable',
  typeNum: 148,

  fieldDescriptors: [
    {
      name: 'Frequency',
      type: 'u32v',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ROSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ROSpec',
  typeNum: 177,

  fieldDescriptors: [
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Priority',
      type: 'u8',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'CurrentState',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Disabled',
          value: 0,
        },
        {
          name: 'Inactive',
          value: 1,
        },
        {
          name: 'Active',
          value: 2,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'ROBoundarySpec',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'SpecParameter',
      repeat: '1-N',
      choices: ['AISpec', 'RFSurveySpec', 'Custom'] as const,
    },
    {
      td: 'ROReportSpec',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ROBoundarySpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ROBoundarySpec',
  typeNum: 178,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'ROSpecStartTrigger',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'ROSpecStopTrigger',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ROSpecStartTrigger = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ROSpecStartTrigger',
  typeNum: 179,

  fieldDescriptors: [
    {
      name: 'ROSpecStartTriggerType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Null',
          value: 0,
        },
        {
          name: 'Immediate',
          value: 1,
        },
        {
          name: 'Periodic',
          value: 2,
        },
        {
          name: 'GPI',
          value: 3,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'PeriodicTriggerValue',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'GPITriggerValue',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_PeriodicTriggerValue = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'PeriodicTriggerValue',
  typeNum: 180,

  fieldDescriptors: [
    {
      name: 'Offset',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Period',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'UTCTimestamp',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_GPITriggerValue = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'GPITriggerValue',
  typeNum: 181,

  fieldDescriptors: [
    {
      name: 'GPIPortNum',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'GPIEvent',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
    {
      name: 'Timeout',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ROSpecStopTrigger = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ROSpecStopTrigger',
  typeNum: 182,

  fieldDescriptors: [
    {
      name: 'ROSpecStopTriggerType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Null',
          value: 0,
        },
        {
          name: 'Duration',
          value: 1,
        },
        {
          name: 'GPI_With_Timeout',
          value: 2,
        },
      ] as const,
    },
    {
      name: 'DurationTriggerValue',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'GPITriggerValue',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_AISpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AISpec',
  typeNum: 183,

  fieldDescriptors: [
    {
      name: 'AntennaIDs',
      type: 'u16v',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'AISpecStopTrigger',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'InventoryParameterSpec',
      repeat: '1-N',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_AISpecStopTrigger = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AISpecStopTrigger',
  typeNum: 184,

  fieldDescriptors: [
    {
      name: 'AISpecStopTriggerType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Null',
          value: 0,
        },
        {
          name: 'Duration',
          value: 1,
        },
        {
          name: 'GPI_With_Timeout',
          value: 2,
        },
        {
          name: 'Tag_Observation',
          value: 3,
        },
      ] as const,
    },
    {
      name: 'DurationTrigger',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'GPITriggerValue',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'TagObservationTrigger',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_TagObservationTrigger = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'TagObservationTrigger',
  typeNum: 185,

  fieldDescriptors: [
    {
      name: 'TriggerType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Upon_Seeing_N_Tags_Or_Timeout',
          value: 0,
        },
        {
          name: 'Upon_Seeing_No_More_New_Tags_For_Tms_Or_Timeout',
          value: 1,
        },
        {
          name: 'N_Attempts_To_See_All_Tags_In_FOV_Or_Timeout',
          value: 2,
        },
      ] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 8,
    },
    {
      name: 'NumberOfTags',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'NumberOfAttempts',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'T',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Timeout',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_InventoryParameterSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'InventoryParameterSpec',
  typeNum: 186,

  fieldDescriptors: [
    {
      name: 'InventoryParameterSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ProtocolID',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Unspecified',
          value: 0,
        },
        {
          name: 'EPCGlobalClass1Gen2',
          value: 1,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'AntennaConfiguration',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_RFSurveySpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'RFSurveySpec',
  typeNum: 187,

  fieldDescriptors: [
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'StartFrequency',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EndFrequency',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'RFSurveySpecStopTrigger',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_RFSurveySpecStopTrigger = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'RFSurveySpecStopTrigger',
  typeNum: 188,

  fieldDescriptors: [
    {
      name: 'StopTriggerType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Null',
          value: 0,
        },
        {
          name: 'Duration',
          value: 1,
        },
        {
          name: 'N_Iterations_Through_Frequency_Range',
          value: 2,
        },
      ] as const,
    },
    {
      name: 'DurationPeriod',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'N',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AccessSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AccessSpec',
  typeNum: 207,

  fieldDescriptors: [
    {
      name: 'AccessSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ProtocolID',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Unspecified',
          value: 0,
        },
        {
          name: 'EPCGlobalClass1Gen2',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'CurrentState',
      type: 'u1',
      format: 'Normal',
      enumTable: [
        {
          name: 'Disabled',
          value: 0,
        },
        {
          name: 'Active',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'AccessSpecStopTrigger',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'AccessCommand',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'AccessReportSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_AccessSpecStopTrigger = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AccessSpecStopTrigger',
  typeNum: 208,

  fieldDescriptors: [
    {
      name: 'AccessSpecStopTrigger',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Null',
          value: 0,
        },
        {
          name: 'Operation_Count',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'OperationCountValue',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AccessCommand = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AccessCommand',
  typeNum: 209,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'AirProtocolTagSpec',
      repeat: '1',
      choices: ['C1G2TagSpec'] as const,
    },
    {
      td: 'AccessCommandOpSpec',
      repeat: '1-N',
      choices: ['C1G2Read', 'C1G2Write', 'C1G2Kill', 'C1G2Lock', 'C1G2BlockErase', 'C1G2BlockWrite', 'Custom'] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_LLRPConfigurationStateValue = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'LLRPConfigurationStateValue',
  typeNum: 217,

  fieldDescriptors: [
    {
      name: 'LLRPConfigurationStateValue',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_Identification = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'Identification',
  typeNum: 218,

  fieldDescriptors: [
    {
      name: 'IDType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'MAC_Address',
          value: 0,
        },
        {
          name: 'EPC',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'ReaderID',
      type: 'u8v',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_GPOWriteData = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'GPOWriteData',
  typeNum: 219,

  fieldDescriptors: [
    {
      name: 'GPOPortNumber',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'GPOData',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_KeepaliveSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'KeepaliveSpec',
  typeNum: 220,

  fieldDescriptors: [
    {
      name: 'KeepaliveTriggerType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Null',
          value: 0,
        },
        {
          name: 'Periodic',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'PeriodicTriggerValue',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AntennaProperties = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AntennaProperties',
  typeNum: 221,

  fieldDescriptors: [
    {
      name: 'AntennaConnected',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'AntennaGain',
      type: 's16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AntennaConfiguration = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AntennaConfiguration',
  typeNum: 222,

  fieldDescriptors: [
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'RFReceiver',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'RFTransmitter',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AirProtocolInventoryCommandSettings',
      repeat: '0-N',
      choices: ['C1G2InventoryCommand'] as const,
    },
  ] as const,
} as const

const LLRP_TD_RFReceiver = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'RFReceiver',
  typeNum: 223,

  fieldDescriptors: [
    {
      name: 'ReceiverSensitivity',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_RFTransmitter = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'RFTransmitter',
  typeNum: 224,

  fieldDescriptors: [
    {
      name: 'HopTableID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ChannelIndex',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'TransmitPower',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_GPIPortCurrentState = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'GPIPortCurrentState',
  typeNum: 225,

  fieldDescriptors: [
    {
      name: 'GPIPortNum',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Config',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
    {
      name: 'State',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Low',
          value: 0,
        },
        {
          name: 'High',
          value: 1,
        },
        {
          name: 'Unknown',
          value: 2,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_EventsAndReports = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'EventsAndReports',
  typeNum: 226,

  fieldDescriptors: [
    {
      name: 'HoldEventsAndReportsUponReconnect',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ROReportSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ROReportSpec',
  typeNum: 237,

  fieldDescriptors: [
    {
      name: 'ROReportTrigger',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'None',
          value: 0,
        },
        {
          name: 'Upon_N_Tags_Or_End_Of_AISpec',
          value: 1,
        },
        {
          name: 'Upon_N_Tags_Or_End_Of_ROSpec',
          value: 2,
        },
      ] as const,
    },
    {
      name: 'N',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'TagReportContentSelector',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_TagReportContentSelector = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'TagReportContentSelector',
  typeNum: 238,

  fieldDescriptors: [
    {
      name: 'EnableROSpecID',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnableSpecIndex',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnableInventoryParameterSpecID',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnableAntennaID',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnableChannelIndex',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnablePeakRSSI',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnableFirstSeenTimestamp',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnableLastSeenTimestamp',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnableTagSeenCount',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnableAccessSpecID',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'AirProtocolEPCMemorySelector',
      repeat: '0-N',
      choices: ['C1G2EPCMemorySelector'] as const,
    },
  ] as const,
} as const

const LLRP_TD_AccessReportSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AccessReportSpec',
  typeNum: 239,

  fieldDescriptors: [
    {
      name: 'AccessReportTrigger',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Whenever_ROReport_Is_Generated',
          value: 0,
        },
        {
          name: 'End_Of_AccessSpec',
          value: 1,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_TagReportData = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'TagReportData',
  typeNum: 240,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'EPCParameter',
      repeat: '1',
      choices: ['EPCData', 'EPC_96'] as const,
    },
    {
      td: 'ROSpecID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'SpecIndex',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'InventoryParameterSpecID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AntennaID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'PeakRSSI',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ChannelIndex',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'FirstSeenTimestampUTC',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'FirstSeenTimestampUptime',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'LastSeenTimestampUTC',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'LastSeenTimestampUptime',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'TagSeenCount',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AirProtocolTagData',
      repeat: '0-N',
      choices: ['C1G2_PC', 'C1G2_CRC'] as const,
    },
    {
      td: 'AccessSpecID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AccessCommandOpSpecResult',
      repeat: '0-N',
      choices: ['C1G2ReadOpSpecResult', 'C1G2WriteOpSpecResult', 'C1G2KillOpSpecResult', 'C1G2LockOpSpecResult', 'C1G2BlockEraseOpSpecResult', 'C1G2BlockWriteOpSpecResult', 'Custom'] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_EPCData = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'EPCData',
  typeNum: 241,

  fieldDescriptors: [
    {
      name: 'EPC',
      type: 'u1v',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_EPC_96 = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'EPC_96',
  typeNum: 13,

  fieldDescriptors: [
    {
      name: 'EPC',
      type: 'u96',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ROSpecID = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ROSpecID',
  typeNum: 9,

  fieldDescriptors: [
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_SpecIndex = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'SpecIndex',
  typeNum: 14,

  fieldDescriptors: [
    {
      name: 'SpecIndex',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_InventoryParameterSpecID = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'InventoryParameterSpecID',
  typeNum: 10,

  fieldDescriptors: [
    {
      name: 'InventoryParameterSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AntennaID = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AntennaID',
  typeNum: 1,

  fieldDescriptors: [
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_PeakRSSI = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'PeakRSSI',
  typeNum: 6,

  fieldDescriptors: [
    {
      name: 'PeakRSSI',
      type: 's8',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ChannelIndex = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ChannelIndex',
  typeNum: 7,

  fieldDescriptors: [
    {
      name: 'ChannelIndex',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_FirstSeenTimestampUTC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'FirstSeenTimestampUTC',
  typeNum: 2,

  fieldDescriptors: [
    {
      name: 'Microseconds',
      type: 'u64',
      format: 'Datetime',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_FirstSeenTimestampUptime = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'FirstSeenTimestampUptime',
  typeNum: 3,

  fieldDescriptors: [
    {
      name: 'Microseconds',
      type: 'u64',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_LastSeenTimestampUTC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'LastSeenTimestampUTC',
  typeNum: 4,

  fieldDescriptors: [
    {
      name: 'Microseconds',
      type: 'u64',
      format: 'Datetime',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_LastSeenTimestampUptime = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'LastSeenTimestampUptime',
  typeNum: 5,

  fieldDescriptors: [
    {
      name: 'Microseconds',
      type: 'u64',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_TagSeenCount = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'TagSeenCount',
  typeNum: 8,

  fieldDescriptors: [
    {
      name: 'TagCount',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AccessSpecID = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AccessSpecID',
  typeNum: 16,

  fieldDescriptors: [
    {
      name: 'AccessSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_RFSurveyReportData = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'RFSurveyReportData',
  typeNum: 242,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'ROSpecID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'SpecIndex',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'FrequencyRSSILevelEntry',
      repeat: '1-N',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_FrequencyRSSILevelEntry = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'FrequencyRSSILevelEntry',
  typeNum: 243,

  fieldDescriptors: [
    {
      name: 'Frequency',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Bandwidth',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'AverageRSSI',
      type: 's8',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'PeakRSSI',
      type: 's8',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'Timestamp',
      repeat: '1',
      choices: ['UTCTimestamp', 'Uptime'] as const,
    },
  ] as const,
} as const

const LLRP_TD_ReaderEventNotificationSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ReaderEventNotificationSpec',
  typeNum: 244,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'EventNotificationState',
      repeat: '1-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_EventNotificationState = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'EventNotificationState',
  typeNum: 245,

  fieldDescriptors: [
    {
      name: 'EventType',
      type: 'u16',
      format: 'Normal',
      enumTable: [
        {
          name: 'Upon_Hopping_To_Next_Channel',
          value: 0,
        },
        {
          name: 'GPI_Event',
          value: 1,
        },
        {
          name: 'ROSpec_Event',
          value: 2,
        },
        {
          name: 'Report_Buffer_Fill_Warning',
          value: 3,
        },
        {
          name: 'Reader_Exception_Event',
          value: 4,
        },
        {
          name: 'RFSurvey_Event',
          value: 5,
        },
        {
          name: 'AISpec_Event',
          value: 6,
        },
        {
          name: 'AISpec_Event_With_Details',
          value: 7,
        },
        {
          name: 'Antenna_Event',
          value: 8,
        },
      ] as const,
    },
    {
      name: 'NotificationState',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ReaderEventNotificationData = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ReaderEventNotificationData',
  typeNum: 246,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'Timestamp',
      repeat: '1',
      choices: ['UTCTimestamp', 'Uptime'] as const,
    },
    {
      td: 'HoppingEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'GPIEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ROSpecEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ReportBufferLevelWarningEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ReportBufferOverflowErrorEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ReaderExceptionEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'RFSurveyEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AISpecEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AntennaEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ConnectionAttemptEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ConnectionCloseEvent',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_HoppingEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'HoppingEvent',
  typeNum: 247,

  fieldDescriptors: [
    {
      name: 'HopTableID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'NextChannelIndex',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_GPIEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'GPIEvent',
  typeNum: 248,

  fieldDescriptors: [
    {
      name: 'GPIPortNumber',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'GPIEvent',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ROSpecEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ROSpecEvent',
  typeNum: 249,

  fieldDescriptors: [
    {
      name: 'EventType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Start_Of_ROSpec',
          value: 0,
        },
        {
          name: 'End_Of_ROSpec',
          value: 1,
        },
        {
          name: 'Preemption_Of_ROSpec',
          value: 2,
        },
      ] as const,
    },
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'PreemptingROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ReportBufferLevelWarningEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ReportBufferLevelWarningEvent',
  typeNum: 250,

  fieldDescriptors: [
    {
      name: 'ReportBufferPercentageFull',
      type: 'u8',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ReportBufferOverflowErrorEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ReportBufferOverflowErrorEvent',
  typeNum: 251,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ReaderExceptionEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ReaderExceptionEvent',
  typeNum: 252,

  fieldDescriptors: [
    {
      name: 'Message',
      type: 'utf8v',
      format: 'UTF8',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'ROSpecID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'SpecIndex',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'InventoryParameterSpecID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AntennaID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AccessSpecID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'OpSpecID',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_OpSpecID = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'OpSpecID',
  typeNum: 17,

  fieldDescriptors: [
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_RFSurveyEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'RFSurveyEvent',
  typeNum: 253,

  fieldDescriptors: [
    {
      name: 'EventType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Start_Of_RFSurvey',
          value: 0,
        },
        {
          name: 'End_Of_RFSurvey',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'SpecIndex',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AISpecEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AISpecEvent',
  typeNum: 254,

  fieldDescriptors: [
    {
      name: 'EventType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'End_Of_AISpec',
          value: 0,
        },
      ] as const,
    },
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'SpecIndex',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'AirProtocolSingulationDetails',
      repeat: '0-1',
      choices: ['C1G2SingulationDetails'] as const,
    },
  ] as const,
} as const

const LLRP_TD_AntennaEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AntennaEvent',
  typeNum: 255,

  fieldDescriptors: [
    {
      name: 'EventType',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Antenna_Disconnected',
          value: 0,
        },
        {
          name: 'Antenna_Connected',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ConnectionAttemptEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ConnectionAttemptEvent',
  typeNum: 256,

  fieldDescriptors: [
    {
      name: 'Status',
      type: 'u16',
      format: 'Normal',
      enumTable: [
        {
          name: 'Success',
          value: 0,
        },
        {
          name: 'Failed_A_Reader_Initiated_Connection_Already_Exists',
          value: 1,
        },
        {
          name: 'Failed_A_Client_Initiated_Connection_Already_Exists',
          value: 2,
        },
        {
          name: 'Failed_Reason_Other_Than_A_Connection_Already_Exists',
          value: 3,
        },
        {
          name: 'Another_Connection_Attempted',
          value: 4,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ConnectionCloseEvent = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ConnectionCloseEvent',
  typeNum: 257,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_LLRPStatus = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'LLRPStatus',
  typeNum: 287,

  fieldDescriptors: [
    {
      name: 'StatusCode',
      type: 'u16',
      format: 'Normal',
      enumTable: [
        {
          name: 'M_Success',
          value: 0,
        },
        {
          name: 'M_ParameterError',
          value: 100,
        },
        {
          name: 'M_FieldError',
          value: 101,
        },
        {
          name: 'M_UnexpectedParameter',
          value: 102,
        },
        {
          name: 'M_MissingParameter',
          value: 103,
        },
        {
          name: 'M_DuplicateParameter',
          value: 104,
        },
        {
          name: 'M_OverflowParameter',
          value: 105,
        },
        {
          name: 'M_OverflowField',
          value: 106,
        },
        {
          name: 'M_UnknownParameter',
          value: 107,
        },
        {
          name: 'M_UnknownField',
          value: 108,
        },
        {
          name: 'M_UnsupportedMessage',
          value: 109,
        },
        {
          name: 'M_UnsupportedVersion',
          value: 110,
        },
        {
          name: 'M_UnsupportedParameter',
          value: 111,
        },
        {
          name: 'P_ParameterError',
          value: 200,
        },
        {
          name: 'P_FieldError',
          value: 201,
        },
        {
          name: 'P_UnexpectedParameter',
          value: 202,
        },
        {
          name: 'P_MissingParameter',
          value: 203,
        },
        {
          name: 'P_DuplicateParameter',
          value: 204,
        },
        {
          name: 'P_OverflowParameter',
          value: 205,
        },
        {
          name: 'P_OverflowField',
          value: 206,
        },
        {
          name: 'P_UnknownParameter',
          value: 207,
        },
        {
          name: 'P_UnknownField',
          value: 208,
        },
        {
          name: 'P_UnsupportedParameter',
          value: 209,
        },
        {
          name: 'A_Invalid',
          value: 300,
        },
        {
          name: 'A_OutOfRange',
          value: 301,
        },
        {
          name: 'R_DeviceError',
          value: 401,
        },
      ] as const,
    },
    {
      name: 'ErrorDescription',
      type: 'utf8v',
      format: 'UTF8',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'FieldError',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ParameterError',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_FieldError = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'FieldError',
  typeNum: 288,

  fieldDescriptors: [
    {
      name: 'FieldNum',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ErrorCode',
      type: 'u16',
      format: 'Normal',
      enumTable: [
        {
          name: 'M_Success',
          value: 0,
        },
        {
          name: 'M_ParameterError',
          value: 100,
        },
        {
          name: 'M_FieldError',
          value: 101,
        },
        {
          name: 'M_UnexpectedParameter',
          value: 102,
        },
        {
          name: 'M_MissingParameter',
          value: 103,
        },
        {
          name: 'M_DuplicateParameter',
          value: 104,
        },
        {
          name: 'M_OverflowParameter',
          value: 105,
        },
        {
          name: 'M_OverflowField',
          value: 106,
        },
        {
          name: 'M_UnknownParameter',
          value: 107,
        },
        {
          name: 'M_UnknownField',
          value: 108,
        },
        {
          name: 'M_UnsupportedMessage',
          value: 109,
        },
        {
          name: 'M_UnsupportedVersion',
          value: 110,
        },
        {
          name: 'M_UnsupportedParameter',
          value: 111,
        },
        {
          name: 'P_ParameterError',
          value: 200,
        },
        {
          name: 'P_FieldError',
          value: 201,
        },
        {
          name: 'P_UnexpectedParameter',
          value: 202,
        },
        {
          name: 'P_MissingParameter',
          value: 203,
        },
        {
          name: 'P_DuplicateParameter',
          value: 204,
        },
        {
          name: 'P_OverflowParameter',
          value: 205,
        },
        {
          name: 'P_OverflowField',
          value: 206,
        },
        {
          name: 'P_UnknownParameter',
          value: 207,
        },
        {
          name: 'P_UnknownField',
          value: 208,
        },
        {
          name: 'P_UnsupportedParameter',
          value: 209,
        },
        {
          name: 'A_Invalid',
          value: 300,
        },
        {
          name: 'A_OutOfRange',
          value: 301,
        },
        {
          name: 'R_DeviceError',
          value: 401,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ParameterError = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'ParameterError',
  typeNum: 289,

  fieldDescriptors: [
    {
      name: 'ParameterType',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ErrorCode',
      type: 'u16',
      format: 'Normal',
      enumTable: [
        {
          name: 'M_Success',
          value: 0,
        },
        {
          name: 'M_ParameterError',
          value: 100,
        },
        {
          name: 'M_FieldError',
          value: 101,
        },
        {
          name: 'M_UnexpectedParameter',
          value: 102,
        },
        {
          name: 'M_MissingParameter',
          value: 103,
        },
        {
          name: 'M_DuplicateParameter',
          value: 104,
        },
        {
          name: 'M_OverflowParameter',
          value: 105,
        },
        {
          name: 'M_OverflowField',
          value: 106,
        },
        {
          name: 'M_UnknownParameter',
          value: 107,
        },
        {
          name: 'M_UnknownField',
          value: 108,
        },
        {
          name: 'M_UnsupportedMessage',
          value: 109,
        },
        {
          name: 'M_UnsupportedVersion',
          value: 110,
        },
        {
          name: 'M_UnsupportedParameter',
          value: 111,
        },
        {
          name: 'P_ParameterError',
          value: 200,
        },
        {
          name: 'P_FieldError',
          value: 201,
        },
        {
          name: 'P_UnexpectedParameter',
          value: 202,
        },
        {
          name: 'P_MissingParameter',
          value: 203,
        },
        {
          name: 'P_DuplicateParameter',
          value: 204,
        },
        {
          name: 'P_OverflowParameter',
          value: 205,
        },
        {
          name: 'P_OverflowField',
          value: 206,
        },
        {
          name: 'P_UnknownParameter',
          value: 207,
        },
        {
          name: 'P_UnknownField',
          value: 208,
        },
        {
          name: 'P_UnsupportedParameter',
          value: 209,
        },
        {
          name: 'A_Invalid',
          value: 300,
        },
        {
          name: 'A_OutOfRange',
          value: 301,
        },
        {
          name: 'R_DeviceError',
          value: 401,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'FieldError',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ParameterError',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_C1G2LLRPCapabilities = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2LLRPCapabilities',
  typeNum: 327,

  fieldDescriptors: [
    {
      name: 'CanSupportBlockErase',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'CanSupportBlockWrite',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
    {
      name: 'MaxNumSelectFiltersPerQuery',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2UHFRFModeTable = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2UHFRFModeTable',
  typeNum: 328,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'C1G2UHFRFModeTableEntry',
      repeat: '1-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_C1G2UHFRFModeTableEntry = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2UHFRFModeTableEntry',
  typeNum: 329,

  fieldDescriptors: [
    {
      name: 'ModeIdentifier',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'DRValue',
      type: 'u1',
      format: 'Normal',
      enumTable: [
        {
          name: 'DRV_8',
          value: 0,
        },
        {
          name: 'DRV_64_3',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'EPCHAGTCConformance',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
    {
      name: 'MValue',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'MV_FM0',
          value: 0,
        },
        {
          name: 'MV_2',
          value: 1,
        },
        {
          name: 'MV_4',
          value: 2,
        },
        {
          name: 'MV_8',
          value: 3,
        },
      ] as const,
    },
    {
      name: 'ForwardLinkModulation',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'PR_ASK',
          value: 0,
        },
        {
          name: 'SSB_ASK',
          value: 1,
        },
        {
          name: 'DSB_ASK',
          value: 2,
        },
      ] as const,
    },
    {
      name: 'SpectralMaskIndicator',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Unknown',
          value: 0,
        },
        {
          name: 'SI',
          value: 1,
        },
        {
          name: 'MI',
          value: 2,
        },
        {
          name: 'DI',
          value: 3,
        },
      ] as const,
    },
    {
      name: 'BDRValue',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'PIEValue',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MinTariValue',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MaxTariValue',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'StepTariValue',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2InventoryCommand = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2InventoryCommand',
  typeNum: 330,

  fieldDescriptors: [
    {
      name: 'TagInventoryStateAware',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'C1G2Filter',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'C1G2RFControl',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'C1G2SingulationControl',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_C1G2Filter = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2Filter',
  typeNum: 331,

  fieldDescriptors: [
    {
      name: 'T',
      type: 'u2',
      format: 'Normal',
      enumTable: [
        {
          name: 'Unspecified',
          value: 0,
        },
        {
          name: 'Do_Not_Truncate',
          value: 1,
        },
        {
          name: 'Truncate',
          value: 2,
        },
      ] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'C1G2TagInventoryMask',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'C1G2TagInventoryStateAwareFilterAction',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'C1G2TagInventoryStateUnawareFilterAction',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_C1G2TagInventoryMask = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2TagInventoryMask',
  typeNum: 332,

  fieldDescriptors: [
    {
      name: 'MB',
      type: 'u2',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
    {
      name: 'Pointer',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'TagMask',
      type: 'u1v',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2TagInventoryStateAwareFilterAction = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2TagInventoryStateAwareFilterAction',
  typeNum: 333,

  fieldDescriptors: [
    {
      name: 'Target',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'SL',
          value: 0,
        },
        {
          name: 'Inventoried_State_For_Session_S0',
          value: 1,
        },
        {
          name: 'Inventoried_State_For_Session_S1',
          value: 2,
        },
        {
          name: 'Inventoried_State_For_Session_S2',
          value: 3,
        },
        {
          name: 'Inventoried_State_For_Session_S3',
          value: 4,
        },
      ] as const,
    },
    {
      name: 'Action',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'AssertSLOrA_DeassertSLOrB',
          value: 0,
        },
        {
          name: 'AssertSLOrA_Noop',
          value: 1,
        },
        {
          name: 'Noop_DeassertSLOrB',
          value: 2,
        },
        {
          name: 'NegateSLOrABBA_Noop',
          value: 3,
        },
        {
          name: 'DeassertSLOrB_AssertSLOrA',
          value: 4,
        },
        {
          name: 'DeassertSLOrB_Noop',
          value: 5,
        },
        {
          name: 'Noop_AssertSLOrA',
          value: 6,
        },
        {
          name: 'Noop_NegateSLOrABBA',
          value: 7,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2TagInventoryStateUnawareFilterAction = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2TagInventoryStateUnawareFilterAction',
  typeNum: 334,

  fieldDescriptors: [
    {
      name: 'Action',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Select_Unselect',
          value: 0,
        },
        {
          name: 'Select_DoNothing',
          value: 1,
        },
        {
          name: 'DoNothing_Unselect',
          value: 2,
        },
        {
          name: 'Unselect_DoNothing',
          value: 3,
        },
        {
          name: 'Unselect_Select',
          value: 4,
        },
        {
          name: 'DoNothing_Select',
          value: 5,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2RFControl = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2RFControl',
  typeNum: 335,

  fieldDescriptors: [
    {
      name: 'ModeIndex',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Tari',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2SingulationControl = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2SingulationControl',
  typeNum: 336,

  fieldDescriptors: [
    {
      name: 'Session',
      type: 'u2',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
    {
      name: 'TagPopulation',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'TagTransitTime',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'C1G2TagInventoryStateAwareSingulationAction',
      repeat: '0-1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_C1G2TagInventoryStateAwareSingulationAction = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2TagInventoryStateAwareSingulationAction',
  typeNum: 337,

  fieldDescriptors: [
    {
      name: 'I',
      type: 'u1',
      format: 'Normal',
      enumTable: [
        {
          name: 'State_A',
          value: 0,
        },
        {
          name: 'State_B',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'S',
      type: 'u1',
      format: 'Normal',
      enumTable: [
        {
          name: 'SL',
          value: 0,
        },
        {
          name: 'Not_SL',
          value: 1,
        },
      ] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2TagSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2TagSpec',
  typeNum: 338,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'C1G2TargetTag',
      repeat: '1-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_C1G2TargetTag = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2TargetTag',
  typeNum: 339,

  fieldDescriptors: [
    {
      name: 'MB',
      type: 'u2',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Match',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 5,
    },
    {
      name: 'Pointer',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'TagMask',
      type: 'u1v',
      format: 'Hex',
      enumTable: [] as const,
    },
    {
      name: 'TagData',
      type: 'u1v',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2Read = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2Read',
  typeNum: 341,

  fieldDescriptors: [
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'AccessPassword',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MB',
      type: 'u2',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
    {
      name: 'WordPointer',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'WordCount',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2Write = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2Write',
  typeNum: 342,

  fieldDescriptors: [
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'AccessPassword',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MB',
      type: 'u2',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
    {
      name: 'WordPointer',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'WriteData',
      type: 'u16v',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2Kill = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2Kill',
  typeNum: 343,

  fieldDescriptors: [
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'KillPassword',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2Lock = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2Lock',
  typeNum: 344,

  fieldDescriptors: [
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'AccessPassword',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'C1G2LockPayload',
      repeat: '1-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_C1G2LockPayload = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2LockPayload',
  typeNum: 345,

  fieldDescriptors: [
    {
      name: 'Privilege',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Read_Write',
          value: 0,
        },
        {
          name: 'Perma_Lock',
          value: 1,
        },
        {
          name: 'Perma_Unlock',
          value: 2,
        },
        {
          name: 'Unlock',
          value: 3,
        },
      ] as const,
    },
    {
      name: 'DataField',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Kill_Password',
          value: 0,
        },
        {
          name: 'Access_Password',
          value: 1,
        },
        {
          name: 'EPC_Memory',
          value: 2,
        },
        {
          name: 'TID_Memory',
          value: 3,
        },
        {
          name: 'User_Memory',
          value: 4,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2BlockErase = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2BlockErase',
  typeNum: 346,

  fieldDescriptors: [
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'AccessPassword',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MB',
      type: 'u2',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
    {
      name: 'WordPointer',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'WordCount',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2BlockWrite = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2BlockWrite',
  typeNum: 347,

  fieldDescriptors: [
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'AccessPassword',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MB',
      type: 'u2',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
    {
      name: 'WordPointer',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'WriteData',
      type: 'u16v',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2EPCMemorySelector = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2EPCMemorySelector',
  typeNum: 348,

  fieldDescriptors: [
    {
      name: 'EnableCRC',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'EnablePCBits',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 6,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2_PC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2_PC',
  typeNum: 12,

  fieldDescriptors: [
    {
      name: 'PC_Bits',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2_CRC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2_CRC',
  typeNum: 11,

  fieldDescriptors: [
    {
      name: 'CRC',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2SingulationDetails = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2SingulationDetails',
  typeNum: 18,

  fieldDescriptors: [
    {
      name: 'NumCollisionSlots',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'NumEmptySlots',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2ReadOpSpecResult = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2ReadOpSpecResult',
  typeNum: 349,

  fieldDescriptors: [
    {
      name: 'Result',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Success',
          value: 0,
        },
        {
          name: 'Nonspecific_Tag_Error',
          value: 1,
        },
        {
          name: 'No_Response_From_Tag',
          value: 2,
        },
        {
          name: 'Nonspecific_Reader_Error',
          value: 3,
        },
      ] as const,
    },
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'ReadData',
      type: 'u16v',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2WriteOpSpecResult = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2WriteOpSpecResult',
  typeNum: 350,

  fieldDescriptors: [
    {
      name: 'Result',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Success',
          value: 0,
        },
        {
          name: 'Tag_Memory_Overrun_Error',
          value: 1,
        },
        {
          name: 'Tag_Memory_Locked_Error',
          value: 2,
        },
        {
          name: 'Insufficient_Power',
          value: 3,
        },
        {
          name: 'Nonspecific_Tag_Error',
          value: 4,
        },
        {
          name: 'No_Response_From_Tag',
          value: 5,
        },
        {
          name: 'Nonspecific_Reader_Error',
          value: 6,
        },
      ] as const,
    },
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'NumWordsWritten',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2KillOpSpecResult = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2KillOpSpecResult',
  typeNum: 351,

  fieldDescriptors: [
    {
      name: 'Result',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Success',
          value: 0,
        },
        {
          name: 'Zero_Kill_Password_Error',
          value: 1,
        },
        {
          name: 'Insufficient_Power',
          value: 2,
        },
        {
          name: 'Nonspecific_Tag_Error',
          value: 3,
        },
        {
          name: 'No_Response_From_Tag',
          value: 4,
        },
        {
          name: 'Nonspecific_Reader_Error',
          value: 5,
        },
      ] as const,
    },
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2LockOpSpecResult = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2LockOpSpecResult',
  typeNum: 352,

  fieldDescriptors: [
    {
      name: 'Result',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Success',
          value: 0,
        },
        {
          name: 'Insufficient_Power',
          value: 1,
        },
        {
          name: 'Nonspecific_Tag_Error',
          value: 2,
        },
        {
          name: 'No_Response_From_Tag',
          value: 3,
        },
        {
          name: 'Nonspecific_Reader_Error',
          value: 4,
        },
      ] as const,
    },
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2BlockEraseOpSpecResult = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2BlockEraseOpSpecResult',
  typeNum: 353,

  fieldDescriptors: [
    {
      name: 'Result',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Success',
          value: 0,
        },
        {
          name: 'Tag_Memory_Overrun_Error',
          value: 1,
        },
        {
          name: 'Tag_Memory_Locked_Error',
          value: 2,
        },
        {
          name: 'Insufficient_Power',
          value: 3,
        },
        {
          name: 'Nonspecific_Tag_Error',
          value: 4,
        },
        {
          name: 'No_Response_From_Tag',
          value: 5,
        },
        {
          name: 'Nonspecific_Reader_Error',
          value: 6,
        },
      ] as const,
    },
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_C1G2BlockWriteOpSpecResult = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'C1G2BlockWriteOpSpecResult',
  typeNum: 354,

  fieldDescriptors: [
    {
      name: 'Result',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'Success',
          value: 0,
        },
        {
          name: 'Tag_Memory_Overrun_Error',
          value: 1,
        },
        {
          name: 'Tag_Memory_Locked_Error',
          value: 2,
        },
        {
          name: 'Insufficient_Power',
          value: 3,
        },
        {
          name: 'Nonspecific_Tag_Error',
          value: 4,
        },
        {
          name: 'No_Response_From_Tag',
          value: 5,
        },
        {
          name: 'Nonspecific_Reader_Error',
          value: 6,
        },
      ] as const,
    },
    {
      name: 'OpSpecID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'NumWordsWritten',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

// Choices

const LLRP_TD_SpecParameter = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'SpecParameter',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AccessCommandOpSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AccessCommandOpSpec',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AccessCommandOpSpecResult = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AccessCommandOpSpecResult',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_EPCParameter = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'EPCParameter',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_Timestamp = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'Timestamp',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AirProtocolLLRPCapabilities = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AirProtocolLLRPCapabilities',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AirProtocolUHFRFModeTable = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AirProtocolUHFRFModeTable',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AirProtocolInventoryCommandSettings = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AirProtocolInventoryCommandSettings',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AirProtocolTagSpec = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AirProtocolTagSpec',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AirProtocolEPCMemorySelector = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AirProtocolEPCMemorySelector',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AirProtocolTagData = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AirProtocolTagData',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_AirProtocolSingulationDetails = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: false,
  name: 'AirProtocolSingulationDetails',
  typeNum: -1,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

// Messages

const LLRP_TD_CUSTOM_MESSAGE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'CUSTOM_MESSAGE',
  typeNum: 1023,
  responseType: null,

  fieldDescriptors: [
    {
      name: 'VendorIdentifier',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'MessageSubtype',
      type: 'u8',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Data',
      type: 'bytesToEnd',
      format: 'Hex',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_GET_READER_CAPABILITIES = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_READER_CAPABILITIES',
  typeNum: 1,
  responseType: 'GET_READER_CAPABILITIES_RESPONSE',

  fieldDescriptors: [
    {
      name: 'RequestedData',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'All',
          value: 0,
        },
        {
          name: 'General_Device_Capabilities',
          value: 1,
        },
        {
          name: 'LLRP_Capabilities',
          value: 2,
        },
        {
          name: 'Regulatory_Capabilities',
          value: 3,
        },
        {
          name: 'LLRP_Air_Protocol_Capabilities',
          value: 4,
        },
      ] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_GET_READER_CAPABILITIES_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_READER_CAPABILITIES_RESPONSE',
  typeNum: 11,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'GeneralDeviceCapabilities',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'LLRPCapabilities',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'RegulatoryCapabilities',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AirProtocolLLRPCapabilities',
      repeat: '0-1',
      choices: ['C1G2LLRPCapabilities'] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ADD_ROSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ADD_ROSPEC',
  typeNum: 20,
  responseType: 'ADD_ROSPEC_RESPONSE',

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'ROSpec',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ADD_ROSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ADD_ROSPEC_RESPONSE',
  typeNum: 30,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_DELETE_ROSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'DELETE_ROSPEC',
  typeNum: 21,
  responseType: 'DELETE_ROSPEC_RESPONSE',

  fieldDescriptors: [
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_DELETE_ROSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'DELETE_ROSPEC_RESPONSE',
  typeNum: 31,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_START_ROSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'START_ROSPEC',
  typeNum: 22,
  responseType: 'START_ROSPEC_RESPONSE',

  fieldDescriptors: [
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_START_ROSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'START_ROSPEC_RESPONSE',
  typeNum: 32,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_STOP_ROSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'STOP_ROSPEC',
  typeNum: 23,
  responseType: 'STOP_ROSPEC_RESPONSE',

  fieldDescriptors: [
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_STOP_ROSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'STOP_ROSPEC_RESPONSE',
  typeNum: 33,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ENABLE_ROSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ENABLE_ROSPEC',
  typeNum: 24,
  responseType: 'ENABLE_ROSPEC_RESPONSE',

  fieldDescriptors: [
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ENABLE_ROSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ENABLE_ROSPEC_RESPONSE',
  typeNum: 34,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_DISABLE_ROSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'DISABLE_ROSPEC',
  typeNum: 25,
  responseType: 'DISABLE_ROSPEC_RESPONSE',

  fieldDescriptors: [
    {
      name: 'ROSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_DISABLE_ROSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'DISABLE_ROSPEC_RESPONSE',
  typeNum: 35,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_GET_ROSPECS = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_ROSPECS',
  typeNum: 26,
  responseType: 'GET_ROSPECS_RESPONSE',

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_GET_ROSPECS_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_ROSPECS_RESPONSE',
  typeNum: 36,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'ROSpec',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ADD_ACCESSSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ADD_ACCESSSPEC',
  typeNum: 40,
  responseType: 'ADD_ACCESSSPEC_RESPONSE',

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'AccessSpec',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ADD_ACCESSSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ADD_ACCESSSPEC_RESPONSE',
  typeNum: 50,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_DELETE_ACCESSSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'DELETE_ACCESSSPEC',
  typeNum: 41,
  responseType: 'DELETE_ACCESSSPEC_RESPONSE',

  fieldDescriptors: [
    {
      name: 'AccessSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_DELETE_ACCESSSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'DELETE_ACCESSSPEC_RESPONSE',
  typeNum: 51,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ENABLE_ACCESSSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ENABLE_ACCESSSPEC',
  typeNum: 42,
  responseType: 'ENABLE_ACCESSSPEC_RESPONSE',

  fieldDescriptors: [
    {
      name: 'AccessSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ENABLE_ACCESSSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ENABLE_ACCESSSPEC_RESPONSE',
  typeNum: 52,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_DISABLE_ACCESSSPEC = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'DISABLE_ACCESSSPEC',
  typeNum: 43,
  responseType: 'DISABLE_ACCESSSPEC_RESPONSE',

  fieldDescriptors: [
    {
      name: 'AccessSpecID',
      type: 'u32',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_DISABLE_ACCESSSPEC_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'DISABLE_ACCESSSPEC_RESPONSE',
  typeNum: 53,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_GET_ACCESSSPECS = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_ACCESSSPECS',
  typeNum: 44,
  responseType: 'GET_ACCESSSPECS_RESPONSE',

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_GET_ACCESSSPECS_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_ACCESSSPECS_RESPONSE',
  typeNum: 54,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'AccessSpec',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_GET_READER_CONFIG = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_READER_CONFIG',
  typeNum: 2,
  responseType: 'GET_READER_CONFIG_RESPONSE',

  fieldDescriptors: [
    {
      name: 'AntennaID',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'RequestedData',
      type: 'u8',
      format: 'Normal',
      enumTable: [
        {
          name: 'All',
          value: 0,
        },
        {
          name: 'Identification',
          value: 1,
        },
        {
          name: 'AntennaProperties',
          value: 2,
        },
        {
          name: 'AntennaConfiguration',
          value: 3,
        },
        {
          name: 'ROReportSpec',
          value: 4,
        },
        {
          name: 'ReaderEventNotificationSpec',
          value: 5,
        },
        {
          name: 'AccessReportSpec',
          value: 6,
        },
        {
          name: 'LLRPConfigurationStateValue',
          value: 7,
        },
        {
          name: 'KeepaliveSpec',
          value: 8,
        },
        {
          name: 'GPIPortCurrentState',
          value: 9,
        },
        {
          name: 'GPOWriteData',
          value: 10,
        },
        {
          name: 'EventsAndReports',
          value: 11,
        },
      ] as const,
    },
    {
      name: 'GPIPortNum',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'GPOPortNum',
      type: 'u16',
      format: 'Normal',
      enumTable: [] as const,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_GET_READER_CONFIG_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_READER_CONFIG_RESPONSE',
  typeNum: 12,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
    {
      td: 'Identification',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AntennaProperties',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'AntennaConfiguration',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'ReaderEventNotificationSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'ROReportSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AccessReportSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'LLRPConfigurationStateValue',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'KeepaliveSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'GPIPortCurrentState',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'GPOWriteData',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'EventsAndReports',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_SET_READER_CONFIG = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'SET_READER_CONFIG',
  typeNum: 3,
  responseType: 'SET_READER_CONFIG_RESPONSE',

  fieldDescriptors: [
    {
      name: 'ResetToFactoryDefault',
      type: 'u1',
      format: 'Normal',
      enumTable: [] as const,
    },
    {
      name: 'Reserved',
      type: 'reserved',
      format: 'Normal',
      enumTable: [] as const,
      bitCount: 7,
    },
  ] as const,
  subTypeRefs: [
    {
      td: 'ReaderEventNotificationSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AntennaProperties',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'AntennaConfiguration',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'ROReportSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'AccessReportSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'KeepaliveSpec',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'GPOWriteData',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'GPIPortCurrentState',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'EventsAndReports',
      repeat: '0-1',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_SET_READER_CONFIG_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'SET_READER_CONFIG_RESPONSE',
  typeNum: 13,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_CLOSE_CONNECTION = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'CLOSE_CONNECTION',
  typeNum: 14,
  responseType: 'CLOSE_CONNECTION_RESPONSE',

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_CLOSE_CONNECTION_RESPONSE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'CLOSE_CONNECTION_RESPONSE',
  typeNum: 4,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_GET_REPORT = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'GET_REPORT',
  typeNum: 60,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_RO_ACCESS_REPORT = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'RO_ACCESS_REPORT',
  typeNum: 61,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'TagReportData',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'RFSurveyReportData',
      repeat: '0-N',
      choices: [] as const,
    },
    {
      td: 'Custom',
      repeat: '0-N',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_KEEPALIVE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'KEEPALIVE',
  typeNum: 62,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_KEEPALIVE_ACK = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'KEEPALIVE_ACK',
  typeNum: 72,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_READER_EVENT_NOTIFICATION = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'READER_EVENT_NOTIFICATION',
  typeNum: 63,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'ReaderEventNotificationData',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

const LLRP_TD_ENABLE_EVENTS_AND_REPORTS = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ENABLE_EVENTS_AND_REPORTS',
  typeNum: 64,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [] as const,
} as const

const LLRP_TD_ERROR_MESSAGE = {
  namespaceDescriptor: LLRP_NAMESPACE,

  isMessage: true,
  name: 'ERROR_MESSAGE',
  typeNum: 100,
  responseType: null,

  fieldDescriptors: [] as const,
  subTypeRefs: [
    {
      td: 'LLRPStatus',
      repeat: '1',
      choices: [] as const,
    },
  ] as const,
} as const

export const LLRPDef = {
  UTCTimestamp: LLRP_TD_UTCTimestamp,
  Uptime: LLRP_TD_Uptime,
  CUSTOM_MESSAGE: LLRP_TD_CUSTOM_MESSAGE,
  Custom: LLRP_TD_Custom,
  GET_READER_CAPABILITIES: LLRP_TD_GET_READER_CAPABILITIES,
  GET_READER_CAPABILITIES_RESPONSE: LLRP_TD_GET_READER_CAPABILITIES_RESPONSE,
  GeneralDeviceCapabilities: LLRP_TD_GeneralDeviceCapabilities,
  ReceiveSensitivityTableEntry: LLRP_TD_ReceiveSensitivityTableEntry,
  PerAntennaReceiveSensitivityRange: LLRP_TD_PerAntennaReceiveSensitivityRange,
  PerAntennaAirProtocol: LLRP_TD_PerAntennaAirProtocol,
  GPIOCapabilities: LLRP_TD_GPIOCapabilities,
  LLRPCapabilities: LLRP_TD_LLRPCapabilities,
  RegulatoryCapabilities: LLRP_TD_RegulatoryCapabilities,
  UHFBandCapabilities: LLRP_TD_UHFBandCapabilities,
  TransmitPowerLevelTableEntry: LLRP_TD_TransmitPowerLevelTableEntry,
  FrequencyInformation: LLRP_TD_FrequencyInformation,
  FrequencyHopTable: LLRP_TD_FrequencyHopTable,
  FixedFrequencyTable: LLRP_TD_FixedFrequencyTable,
  ADD_ROSPEC: LLRP_TD_ADD_ROSPEC,
  ADD_ROSPEC_RESPONSE: LLRP_TD_ADD_ROSPEC_RESPONSE,
  DELETE_ROSPEC: LLRP_TD_DELETE_ROSPEC,
  DELETE_ROSPEC_RESPONSE: LLRP_TD_DELETE_ROSPEC_RESPONSE,
  START_ROSPEC: LLRP_TD_START_ROSPEC,
  START_ROSPEC_RESPONSE: LLRP_TD_START_ROSPEC_RESPONSE,
  STOP_ROSPEC: LLRP_TD_STOP_ROSPEC,
  STOP_ROSPEC_RESPONSE: LLRP_TD_STOP_ROSPEC_RESPONSE,
  ENABLE_ROSPEC: LLRP_TD_ENABLE_ROSPEC,
  ENABLE_ROSPEC_RESPONSE: LLRP_TD_ENABLE_ROSPEC_RESPONSE,
  DISABLE_ROSPEC: LLRP_TD_DISABLE_ROSPEC,
  DISABLE_ROSPEC_RESPONSE: LLRP_TD_DISABLE_ROSPEC_RESPONSE,
  GET_ROSPECS: LLRP_TD_GET_ROSPECS,
  GET_ROSPECS_RESPONSE: LLRP_TD_GET_ROSPECS_RESPONSE,
  ROSpec: LLRP_TD_ROSpec,
  SpecParameter: LLRP_TD_SpecParameter,
  ROBoundarySpec: LLRP_TD_ROBoundarySpec,
  ROSpecStartTrigger: LLRP_TD_ROSpecStartTrigger,
  PeriodicTriggerValue: LLRP_TD_PeriodicTriggerValue,
  GPITriggerValue: LLRP_TD_GPITriggerValue,
  ROSpecStopTrigger: LLRP_TD_ROSpecStopTrigger,
  AISpec: LLRP_TD_AISpec,
  AISpecStopTrigger: LLRP_TD_AISpecStopTrigger,
  TagObservationTrigger: LLRP_TD_TagObservationTrigger,
  InventoryParameterSpec: LLRP_TD_InventoryParameterSpec,
  RFSurveySpec: LLRP_TD_RFSurveySpec,
  RFSurveySpecStopTrigger: LLRP_TD_RFSurveySpecStopTrigger,
  ADD_ACCESSSPEC: LLRP_TD_ADD_ACCESSSPEC,
  ADD_ACCESSSPEC_RESPONSE: LLRP_TD_ADD_ACCESSSPEC_RESPONSE,
  DELETE_ACCESSSPEC: LLRP_TD_DELETE_ACCESSSPEC,
  DELETE_ACCESSSPEC_RESPONSE: LLRP_TD_DELETE_ACCESSSPEC_RESPONSE,
  ENABLE_ACCESSSPEC: LLRP_TD_ENABLE_ACCESSSPEC,
  ENABLE_ACCESSSPEC_RESPONSE: LLRP_TD_ENABLE_ACCESSSPEC_RESPONSE,
  DISABLE_ACCESSSPEC: LLRP_TD_DISABLE_ACCESSSPEC,
  DISABLE_ACCESSSPEC_RESPONSE: LLRP_TD_DISABLE_ACCESSSPEC_RESPONSE,
  GET_ACCESSSPECS: LLRP_TD_GET_ACCESSSPECS,
  GET_ACCESSSPECS_RESPONSE: LLRP_TD_GET_ACCESSSPECS_RESPONSE,
  AccessSpec: LLRP_TD_AccessSpec,
  AccessSpecStopTrigger: LLRP_TD_AccessSpecStopTrigger,
  AccessCommand: LLRP_TD_AccessCommand,
  AccessCommandOpSpec: LLRP_TD_AccessCommandOpSpec,
  GET_READER_CONFIG: LLRP_TD_GET_READER_CONFIG,
  GET_READER_CONFIG_RESPONSE: LLRP_TD_GET_READER_CONFIG_RESPONSE,
  SET_READER_CONFIG: LLRP_TD_SET_READER_CONFIG,
  SET_READER_CONFIG_RESPONSE: LLRP_TD_SET_READER_CONFIG_RESPONSE,
  CLOSE_CONNECTION: LLRP_TD_CLOSE_CONNECTION,
  CLOSE_CONNECTION_RESPONSE: LLRP_TD_CLOSE_CONNECTION_RESPONSE,
  LLRPConfigurationStateValue: LLRP_TD_LLRPConfigurationStateValue,
  Identification: LLRP_TD_Identification,
  GPOWriteData: LLRP_TD_GPOWriteData,
  KeepaliveSpec: LLRP_TD_KeepaliveSpec,
  AntennaProperties: LLRP_TD_AntennaProperties,
  AntennaConfiguration: LLRP_TD_AntennaConfiguration,
  RFReceiver: LLRP_TD_RFReceiver,
  RFTransmitter: LLRP_TD_RFTransmitter,
  GPIPortCurrentState: LLRP_TD_GPIPortCurrentState,
  EventsAndReports: LLRP_TD_EventsAndReports,
  GET_REPORT: LLRP_TD_GET_REPORT,
  RO_ACCESS_REPORT: LLRP_TD_RO_ACCESS_REPORT,
  KEEPALIVE: LLRP_TD_KEEPALIVE,
  KEEPALIVE_ACK: LLRP_TD_KEEPALIVE_ACK,
  READER_EVENT_NOTIFICATION: LLRP_TD_READER_EVENT_NOTIFICATION,
  ENABLE_EVENTS_AND_REPORTS: LLRP_TD_ENABLE_EVENTS_AND_REPORTS,
  ROReportSpec: LLRP_TD_ROReportSpec,
  TagReportContentSelector: LLRP_TD_TagReportContentSelector,
  AccessReportSpec: LLRP_TD_AccessReportSpec,
  TagReportData: LLRP_TD_TagReportData,
  AccessCommandOpSpecResult: LLRP_TD_AccessCommandOpSpecResult,
  EPCParameter: LLRP_TD_EPCParameter,
  EPCData: LLRP_TD_EPCData,
  EPC_96: LLRP_TD_EPC_96,
  ROSpecID: LLRP_TD_ROSpecID,
  SpecIndex: LLRP_TD_SpecIndex,
  InventoryParameterSpecID: LLRP_TD_InventoryParameterSpecID,
  AntennaID: LLRP_TD_AntennaID,
  PeakRSSI: LLRP_TD_PeakRSSI,
  ChannelIndex: LLRP_TD_ChannelIndex,
  FirstSeenTimestampUTC: LLRP_TD_FirstSeenTimestampUTC,
  FirstSeenTimestampUptime: LLRP_TD_FirstSeenTimestampUptime,
  LastSeenTimestampUTC: LLRP_TD_LastSeenTimestampUTC,
  LastSeenTimestampUptime: LLRP_TD_LastSeenTimestampUptime,
  TagSeenCount: LLRP_TD_TagSeenCount,
  AccessSpecID: LLRP_TD_AccessSpecID,
  RFSurveyReportData: LLRP_TD_RFSurveyReportData,
  FrequencyRSSILevelEntry: LLRP_TD_FrequencyRSSILevelEntry,
  Timestamp: LLRP_TD_Timestamp,
  ReaderEventNotificationSpec: LLRP_TD_ReaderEventNotificationSpec,
  EventNotificationState: LLRP_TD_EventNotificationState,
  ReaderEventNotificationData: LLRP_TD_ReaderEventNotificationData,
  HoppingEvent: LLRP_TD_HoppingEvent,
  GPIEvent: LLRP_TD_GPIEvent,
  ROSpecEvent: LLRP_TD_ROSpecEvent,
  ReportBufferLevelWarningEvent: LLRP_TD_ReportBufferLevelWarningEvent,
  ReportBufferOverflowErrorEvent: LLRP_TD_ReportBufferOverflowErrorEvent,
  ReaderExceptionEvent: LLRP_TD_ReaderExceptionEvent,
  OpSpecID: LLRP_TD_OpSpecID,
  RFSurveyEvent: LLRP_TD_RFSurveyEvent,
  AISpecEvent: LLRP_TD_AISpecEvent,
  AntennaEvent: LLRP_TD_AntennaEvent,
  ConnectionAttemptEvent: LLRP_TD_ConnectionAttemptEvent,
  ConnectionCloseEvent: LLRP_TD_ConnectionCloseEvent,
  ERROR_MESSAGE: LLRP_TD_ERROR_MESSAGE,
  LLRPStatus: LLRP_TD_LLRPStatus,
  FieldError: LLRP_TD_FieldError,
  ParameterError: LLRP_TD_ParameterError,
  C1G2LLRPCapabilities: LLRP_TD_C1G2LLRPCapabilities,
  C1G2UHFRFModeTable: LLRP_TD_C1G2UHFRFModeTable,
  C1G2UHFRFModeTableEntry: LLRP_TD_C1G2UHFRFModeTableEntry,
  C1G2InventoryCommand: LLRP_TD_C1G2InventoryCommand,
  C1G2Filter: LLRP_TD_C1G2Filter,
  C1G2TagInventoryMask: LLRP_TD_C1G2TagInventoryMask,
  C1G2TagInventoryStateAwareFilterAction: LLRP_TD_C1G2TagInventoryStateAwareFilterAction,
  C1G2TagInventoryStateUnawareFilterAction: LLRP_TD_C1G2TagInventoryStateUnawareFilterAction,
  C1G2RFControl: LLRP_TD_C1G2RFControl,
  C1G2SingulationControl: LLRP_TD_C1G2SingulationControl,
  C1G2TagInventoryStateAwareSingulationAction: LLRP_TD_C1G2TagInventoryStateAwareSingulationAction,
  C1G2TagSpec: LLRP_TD_C1G2TagSpec,
  C1G2TargetTag: LLRP_TD_C1G2TargetTag,
  C1G2Read: LLRP_TD_C1G2Read,
  C1G2Write: LLRP_TD_C1G2Write,
  C1G2Kill: LLRP_TD_C1G2Kill,
  C1G2Lock: LLRP_TD_C1G2Lock,
  C1G2LockPayload: LLRP_TD_C1G2LockPayload,
  C1G2BlockErase: LLRP_TD_C1G2BlockErase,
  C1G2BlockWrite: LLRP_TD_C1G2BlockWrite,
  C1G2EPCMemorySelector: LLRP_TD_C1G2EPCMemorySelector,
  C1G2_PC: LLRP_TD_C1G2_PC,
  C1G2_CRC: LLRP_TD_C1G2_CRC,
  C1G2SingulationDetails: LLRP_TD_C1G2SingulationDetails,
  C1G2ReadOpSpecResult: LLRP_TD_C1G2ReadOpSpecResult,
  C1G2WriteOpSpecResult: LLRP_TD_C1G2WriteOpSpecResult,
  C1G2KillOpSpecResult: LLRP_TD_C1G2KillOpSpecResult,
  C1G2LockOpSpecResult: LLRP_TD_C1G2LockOpSpecResult,
  C1G2BlockEraseOpSpecResult: LLRP_TD_C1G2BlockEraseOpSpecResult,
  C1G2BlockWriteOpSpecResult: LLRP_TD_C1G2BlockWriteOpSpecResult,
  AirProtocolLLRPCapabilities: LLRP_TD_AirProtocolLLRPCapabilities,
  AirProtocolUHFRFModeTable: LLRP_TD_AirProtocolUHFRFModeTable,
  AirProtocolInventoryCommandSettings: LLRP_TD_AirProtocolInventoryCommandSettings,
  AirProtocolTagSpec: LLRP_TD_AirProtocolTagSpec,
  AirProtocolEPCMemorySelector: LLRP_TD_AirProtocolEPCMemorySelector,
  AirProtocolTagData: LLRP_TD_AirProtocolTagData,
  AirProtocolSingulationDetails: LLRP_TD_AirProtocolSingulationDetails,
}
