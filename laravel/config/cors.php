<?php

return [

'paths' => ['api/*', 'sanctum/csrf-cookie', 'v2/*'],
'allowed_methods' => ['*'],
'allowed_origins' => ['http://localhost:3001', 'http://localhost:3002'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'exposed_headers' => [],
'max_age' => 0,
'supports_credentials' => true,

];
