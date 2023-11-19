export const dummyDomain = {
   ID: 1,
   domain: 'compressimage.io',
   slug: 'compressimage-io',
   keywordCount: 10,
   avgPosition: 24,
   lastUpdated: '2022-11-11T10:00:32.243',
   added: '2022-11-11T10:00:32.244',
   tags: '',
   notification: true,
   notification_interval: 'daily',
   notification_emails: '',
};

export const dummyKeywords = [
   {
       ID: 1,
       keyword: 'compress image',
       device: 'desktop',
       country: 'US',
       domain: 'compressimage.io',
       lastUpdated: '2022-11-15T10:49:53.113',
       added: '2022-11-11T10:01:06.951',
       position: 19,
       history: {
           '2022-11-11': 21,
           '2022-11-12': 24,
           '2022-11-13': 24,
           '2022-11-14': 20,
           '2022-11-15': 19,
       },
       url: 'https://compressimage.io/',
       tags: [],
       lastResult: [],
       sticky: false,
       updating: false,
       lastUpdateError: false as false,
   },
   {
       ID: 2,
       keyword: 'image compressor',
       device: 'desktop',
       country: 'US',
       domain: 'compressimage.io',
       lastUpdated: '2022-11-15T10:49:53.119',
       added: '2022-11-15T10:01:06.951',
       position: 29,
       history: {
           '2022-11-11': 33,
           '2022-11-12': 34,
           '2022-11-13': 17,
           '2022-11-14': 30,
           '2022-11-15': 29,
       },
       url: 'https://compressimage.io/',
       tags: ['compressor'],
       lastResult: [],
       sticky: false,
       updating: false,
       lastUpdateError: false as false,
   },
];

export const dummySettings = {
   scaping_api: '',
   scraper_type: 'none',
   notification_interval: 'never',
   notification_email: '',
   notification_email_from: '',
   smtp_server: '',
   smtp_port: '',
   smtp_username: '',
   smtp_password: '',
   scrape_retry: false,
   search_console_integrated: false,
   screenshot_key: '',
   available_scapers: [],
   failed_queue: [],
};
