import { Cookies } from 'react-cookie'

export const localeCookieName = '_ahh_c_n'

const cookies = new Cookies()

export function getParameter(locationSearch: any, paramName: string) {
  const searchString = locationSearch.substring(1)
  let i
  let val
  const params = searchString.split('&')

  for (i = 0; i < params.length; i++) {
    val = params[i].split('=')
    if (val[0] === paramName) {
      return val[1]
    }
  }
  return null
}

export function addThousandsSeparator(str) {
  const isFloat = str.includes('.')
  const _str = str.split('.')

  if (isFloat) {
    return `${_str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${_str[1]}`
  } else {
    return _str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

// export const availableCurrencies = ['CAD', 'USD', 'NGN'];
export const availableCurrencies = ['NGN']

export function currencyByCountry(countryCode) {
  switch (countryCode) {
    case 'US':
      return 'USD'
    case 'CA':
      return 'CAD'
    case 'NG':
      return 'NGN'
    default:
      return 'USD'
  }
}

const currencyMap = {
  CAD: {
    name: 'Canadian Dollars',
    symbol: '$'
  },
  USD: {
    name: 'US Dollars',
    symbol: '$'
  },
  NGN: {
    name: 'Nigerian Naira',
    symbol: '₦'
  }
}

export const maxAmounts = {
  CAD: 1000,
  USD: 1000,
  NGN: 500000
}

export const maxTimes = {
  fundraiseLength: 6
}

export function formatCurrency(num, currency, decimalPlaces = 2) {
  if (isNaN(num) || !currency) {
    return num
  }
  currency = currency.split(' ')[0]
  const isNumPositive = num >= 0
  num = addThousandsSeparator(Math.abs(num).toFixed(decimalPlaces))
  const symbol = currencyMap[currency].symbol

  return `${isNumPositive ? '' : '- '}${symbol}${num}`
}

export function rewardToAmountRatio(amount, reward) {
  const ratio = (reward / amount) * 100
  return formatPercent(ratio)
}

export function formatPercent(num, decimalPlaces = 0) {
  if (isNaN(num)) {
    return num
  }
  const isNumPositive = num >= 0
  num = addThousandsSeparator(Math.abs(num).toFixed(decimalPlaces))
  const symbol = '%'

  return `${isNumPositive ? '' : '- '}${num}${symbol}`
}

export function roundNum(num, decimalPlaces = 0) {
  if (isNaN(num)) {
    return num
  }
  num = addThousandsSeparator(Math.abs(num).toFixed(decimalPlaces))

  return Number(num)
}

export function formatDate(date) {
  if (!date) {
    return ''
  }
  const options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

export function formatDateTime(date) {
  if (!date) {
    return ''
  }
  const options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

export const canadianProvinces = [
  {
    name: 'Alberta',
    value: 'AB'
  },
  {
    name: 'British Columbia',
    value: 'BC'
  },
  {
    name: 'Manitoba',
    value: 'MB'
  },
  {
    name: 'New Brunswick',
    value: 'NB'
  },
  {
    name: 'Newfoundland and Labrador',
    value: 'NL'
  },
  {
    name: 'Northwest Territories',
    value: 'NT'
  },
  {
    name: 'Nova Scotia',
    value: 'NS'
  },
  {
    name: 'Nunavut',
    value: 'NU'
  },
  {
    name: 'Ontario',
    value: 'ON'
  },
  {
    name: 'Prince Edward Island',
    value: 'PE'
  },
  {
    name: 'Quebec',
    value: 'QC'
  },
  {
    name: 'Saskatchewan',
    value: 'SK'
  },
  {
    name: 'Yukon Territory',
    value: 'YT'
  }
]

export const usStates = [
  {
    name: 'Alabama',
    value: 'AL'
  },
  {
    name: 'Alaska',
    value: 'AK'
  },
  {
    name: 'American Samoa',
    value: 'AS'
  },
  {
    name: 'Arizona',
    value: 'AZ'
  },
  {
    name: 'Arkansas',
    value: 'AR'
  },
  {
    name: 'California',
    value: 'CA'
  },
  {
    name: 'Colorado',
    value: 'CO'
  },
  {
    name: 'Connecticut',
    value: 'CT'
  },
  {
    name: 'Delaware',
    value: 'DE'
  },
  {
    name: 'District Of Columbia',
    value: 'DC'
  },
  {
    name: 'Federated States Of Micronesia',
    value: 'FM'
  },
  {
    name: 'Florida',
    value: 'FL'
  },
  {
    name: 'Georgia',
    value: 'GA'
  },
  {
    name: 'Guam',
    value: 'GU'
  },
  {
    name: 'Hawaii',
    value: 'HI'
  },
  {
    name: 'Idaho',
    value: 'ID'
  },
  {
    name: 'Illinois',
    value: 'IL'
  },
  {
    name: 'Indiana',
    value: 'IN'
  },
  {
    name: 'Iowa',
    value: 'IA'
  },
  {
    name: 'Kansas',
    value: 'KS'
  },
  {
    name: 'Kentucky',
    value: 'KY'
  },
  {
    name: 'Louisiana',
    value: 'LA'
  },
  {
    name: 'Maine',
    value: 'ME'
  },
  {
    name: 'Marshall Islands',
    value: 'MH'
  },
  {
    name: 'Maryland',
    value: 'MD'
  },
  {
    name: 'Massachusetts',
    value: 'MA'
  },
  {
    name: 'Michigan',
    value: 'MI'
  },
  {
    name: 'Minnesota',
    value: 'MN'
  },
  {
    name: 'Mississippi',
    value: 'MS'
  },
  {
    name: 'Missouri',
    value: 'MO'
  },
  {
    name: 'Montana',
    value: 'MT'
  },
  {
    name: 'Nebraska',
    value: 'NE'
  },
  {
    name: 'Nevada',
    value: 'NV'
  },
  {
    name: 'New Hampshire',
    value: 'NH'
  },
  {
    name: 'New Jersey',
    value: 'NJ'
  },
  {
    name: 'New Mexico',
    value: 'NM'
  },
  {
    name: 'New York',
    value: 'NY'
  },
  {
    name: 'North Carolina',
    value: 'NC'
  },
  {
    name: 'North Dakota',
    value: 'ND'
  },
  {
    name: 'Northern Mariana Islands',
    value: 'MP'
  },
  {
    name: 'Ohio',
    value: 'OH'
  },
  {
    name: 'Oklahoma',
    value: 'OK'
  },
  {
    name: 'Oregon',
    value: 'OR'
  },
  {
    name: 'Palau',
    value: 'PW'
  },
  {
    name: 'Pennsylvania',
    value: 'PA'
  },
  {
    name: 'Puerto Rico',
    value: 'PR'
  },
  {
    name: 'Rhode Island',
    value: 'RI'
  },
  {
    name: 'South Carolina',
    value: 'SC'
  },
  {
    name: 'South Dakota',
    value: 'SD'
  },
  {
    name: 'Tennessee',
    value: 'TN'
  },
  {
    name: 'Texas',
    value: 'TX'
  },
  {
    name: 'Utah',
    value: 'UT'
  },
  {
    name: 'Vermont',
    value: 'VT'
  },
  {
    name: 'Virgin Islands',
    value: 'VI'
  },
  {
    name: 'Virginia',
    value: 'VA'
  },
  {
    name: 'Washington',
    value: 'WA'
  },
  {
    name: 'West Virginia',
    value: 'WV'
  },
  {
    name: 'Wisconsin',
    value: 'WI'
  },
  {
    name: 'Wyoming',
    value: 'WY'
  }
]

export const nigerianStates = [
  {
    value: 'NG-FC',
    name: 'Abuja Federal Capital Territory'
  },
  {
    value: 'NG-AB',
    name: 'Abia'
  },
  {
    value: 'NG-AD',
    name: 'Adamawa'
  },
  {
    value: 'NG-AK',
    name: 'Akwa Ibom'
  },
  {
    value: 'NG-AN',
    name: 'Anambra'
  },
  {
    value: 'NG-BA',
    name: 'Bauchi'
  },
  {
    value: 'NG-BY',
    name: 'Bayelsa'
  },
  {
    value: 'NG-BE',
    name: 'Benue'
  },
  {
    value: 'NG-BO',
    name: 'Borno'
  },
  {
    value: 'NG-CR',
    name: 'Cross River'
  },
  {
    value: 'NG-DE',
    name: 'Delta'
  },
  {
    value: 'NG-EB',
    name: 'Ebonyi'
  },
  {
    value: 'NG-ED',
    name: 'Edo'
  },
  {
    value: 'NG-EK',
    name: 'Ekiti'
  },
  {
    value: 'NG-EN',
    name: 'Enugu'
  },
  {
    value: 'NG-GO',
    name: 'Gombe'
  },
  {
    value: 'NG-IM',
    name: 'Imo'
  },
  {
    value: 'NG-JI',
    name: 'Jigawa'
  },
  {
    value: 'NG-KD',
    name: 'Kaduna'
  },
  {
    value: 'NG-KN',
    name: 'Kano'
  },
  {
    value: 'NG-KT',
    name: 'Katsina'
  },
  {
    value: 'NG-KE',
    name: 'Kebbi'
  },
  {
    value: 'NG-KO',
    name: 'Kogi'
  },
  {
    value: 'NG-KW',
    name: 'Kwara'
  },
  {
    value: 'NG-LA',
    name: 'Lagos'
  },
  {
    value: 'NG-NA',
    name: 'Nasarawa'
  },
  {
    value: 'NG-NI',
    name: 'Niger'
  },
  {
    value: 'NG-OG',
    name: 'Ogun'
  },
  {
    value: 'NG-ON',
    name: 'Ondo'
  },
  {
    value: 'NG-OS',
    name: 'Osun'
  },
  {
    value: 'NG-OY',
    name: 'Oyo'
  },
  {
    value: 'NG-PL',
    name: 'Plateau'
  },
  {
    value: 'NG-RI',
    name: 'Rivers'
  },
  {
    value: 'NG-SO',
    name: 'Sokoto'
  },
  {
    value: 'NG-TA',
    name: 'Taraba'
  },
  {
    value: 'NG-YO',
    name: 'Yobe'
  },
  {
    value: 'NG-ZA',
    name: 'Zamfara'
  }
]

export const localeState = {
  get: () => {
    return cookies.get(localeCookieName)
  },
  set: (value) => {
    cookies.set(localeCookieName, value, { path: '/' })
  }
}
