# Official Docs Coverage Report

Source HTML: `.crawl_official/change-log.html`

Docs root: `docs`

Official endpoints: 131

Doc endpoints: 146

Missing base endpoints: 4

Extra base endpoints: 27

Missing example requests: 28

Extra example requests: 43

Missing paths (no method match): 33

Missing headings (h1-h3): 101

## Missing Base Endpoints

- GET /v1/inclusion-preconf/markets
- GET /v1/p/bundles
- GET /v1/wholeblock/markets
- POST /v1/inclusion-preconf/cancel-batch-oders

## Extra Base Endpoints In Docs

- GET /v1/p/builder/12345
- GET /v1/p/builder/\{slot\}
- GET /v1/p/builder/bundle/reject/123/456
- GET /v1/p/builder/bundle/reject/{slot}/{builderAccountId}
- GET /v1/p/slot/txs/hash
- GET /v1/user/account/242
- GET /v1/user/account/\{accountId\}
- GET /v1/user/obol/operator/validators
- GET /v1/user/obol/operators
- GET /v1/user/ssv/operator/validators
- GET /v1/user/ssv/operators
- POST /v1/builder/bundle/reject/123
- POST /v1/builder/bundle/reject/{slot}
- POST /v1/builder/update/ofac
- POST /v1/user/obol/operator/deregister
- POST /v1/user/obol/operator/refresh
- POST /v1/user/obol/operator/register
- POST /v1/user/obol/operator/validator/deregister
- POST /v1/user/obol/operator/validator/register
- POST /v1/user/obol/operator/validator/update/ofac
- POST /v1/user/obol/operator/verify
- POST /v1/user/ssv/operator/deregister
- POST /v1/user/ssv/operator/register
- POST /v1/user/ssv/operator/validator/deregister
- POST /v1/user/ssv/operator/validator/register
- POST /v1/user/ssv/operator/validator/update/ofac
- POST /v1/user/ssv/operator/verify

## Missing Example Requests

- GET /v1/inclusion-preconf/markets
- GET /v1/p/bundles
- GET /v1/p/bundles?slot=2870227
- GET /v1/p/inclusion-preconf/top-sales?instrumentId=ETH-PC-475423&limit=10
- GET /v1/p/inclusion-preconf/trades?instrumentId=ETH-PC-988403
- GET /v1/p/wholeblock/orders?instrumentId=ETH-WB-9884031&onbook=false&done=false&limit=10
- GET /v1/pricer/inclusion-preconf/orders?accountId=123&instrumentId=abc&pending=true&limit=20
- GET /v1/pricer/inclusion-preconf/positions?instrumentId=123&accountId=456
- GET /v1/pricer/wholeblock/orders?accountId=123&instrumentId=abc&pending=true&limit=20
- GET /v1/pricer/wholeblock/positions?instrumentId=123&accountId=456
- GET /v1/user/inclusion-preconf/all-orders?limit=10
- GET /v1/user/inclusion-preconf/positions?instrumentId=ETH-PC-9884031&limit=10
- GET /v1/user/inclusion-preconf/txs?instrumentId=ETH-PC-9884031&limit=100
- GET /v1/wholeblock/markets
- POST /v1/inclusion-preconf/cancel-all-orders?accountId=128&instrumentId=ETH-PC-1012051
- POST /v1/inclusion-preconf/cancel-batch-oders?accountId=128&instrumentId=ETH-PC-1012051&orderIds=b25ab4023%2c5e885ddd
- POST /v1/inclusion-preconf/cancel-order?accountId=128&instrumentId=ETH-PC-1012051&orderId=b25ab402
- POST /v1/inclusion-preconf/order&instrumentId=ETH-PC-9884031&accountId=128&side=1&orderType=2&clientOrderId=05d61624&passive=false&price=0.01&quantity=10000
- POST /v1/user/delegate/pricer?enable=true
- POST /v1/user/inclusion-preconf/market/update?instrumentId=ETH-PC-475423&reservedQty=1000
- POST /v1/validator/deregister?publicKey=0x123423abcdef1234567890abcdef1234567890,0x3459871234567890abcdef1234567890abcdef1234567890
- POST /v1/validator/register?publicKey=0x123423abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
- POST /v1/validator/settings?collateralPerSlot=1.0
- POST /v1/validator/verify?publicKey=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef&signature=0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890
- POST /v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051
- POST /v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051&orderIds=b25ab4023%2c5e885dd
- POST /v1/wholeblock/cancel-order?accountId=128&instrumentId=ETH-WB-1012051&orderId=b25ab402
- POST /v1/wholeblock/order&instrumentId=ETH-WB-9884031&accountId=128&side=1&orderType=2&clientOrderId=05d61624&passive=false&price=0.01

## Extra Example Requests In Docs

- GET /v1/account/slot/bundles?accountId=242&slot=12345
- GET /v1/account/slot/bundles?slot=123
- GET /v1/p/builder/12345
- GET /v1/p/builder/\{slot\}
- GET /v1/p/builder/bundle/reject/123/456
- GET /v1/p/builder/bundle/reject/{slot}/{builderAccountId}
- GET /v1/p/inclusion-preconf/market?marketId=1
- GET /v1/p/inclusion-preconf/trades?instrumentId=ETH-PC-988403&limit=10
- GET /v1/p/network?chainId=1
- GET /v1/p/slot/txs/hash
- GET /v1/p/slot/txs/hash?slot=12345
- GET /v1/p/wholeblock/orders?instrumentId=ETH-WB-9884031&limit=10
- GET /v1/slot/bundles?slot=12345
- GET /v1/slot/forceEmptyBlockSpace?slot=12345
- GET /v1/user/account/242
- GET /v1/user/account/\{accountId\}
- GET /v1/user/inclusion-preconf/txs?instrumentId=ETH-PC-9884031&limit=10
- GET /v1/user/obol/operator/validators
- GET /v1/user/obol/operator/validators?operatorId=1
- GET /v1/user/obol/operators
- GET /v1/user/ssv/operator/validators
- GET /v1/user/ssv/operator/validators?operatorId=1
- GET /v1/user/ssv/operators
- POST /v1/builder/bundle/reject/123
- POST /v1/builder/bundle/reject/{slot}
- POST /v1/builder/update/ofac
- POST /v1/builder/update/ofac?publicKeys=0x12345...,0x2df345...&ofac=true
- POST /v1/user/collateralPerSlot?collateralPerSlot=1000000000000000000
- POST /v1/user/login/verify?addr=0x8F02425B5f3c522b7EF8EA124162645F0397c478&nonceHash=0x1234567890abcdef...&signature=0xabcdef123456
- POST /v1/user/obol/operator/deregister
- POST /v1/user/obol/operator/refresh
- POST /v1/user/obol/operator/register
- POST /v1/user/obol/operator/validator/deregister
- POST /v1/user/obol/operator/validator/register
- POST /v1/user/obol/operator/validator/update/ofac
- POST /v1/user/obol/operator/verify
- POST /v1/user/payoutAddress?payoutAddress=0x1234567890abcdef1234567890abcdef12345678
- POST /v1/user/ssv/operator/deregister
- POST /v1/user/ssv/operator/register
- POST /v1/user/ssv/operator/validator/deregister
- POST /v1/user/ssv/operator/validator/register
- POST /v1/user/ssv/operator/validator/update/ofac
- POST /v1/user/ssv/operator/verify

## Missing Paths (No Method Match)

- /v1/inclusion-preconf/cancel-all-oders
- /v1/inclusion-preconf/cancel-all-orders?accountId=128&instrumentId=ETH-PC-1012051
- /v1/inclusion-preconf/cancel-batch-oders
- /v1/inclusion-preconf/cancel-batch-oders?accountId=128&instrumentId=ETH-PC-1012051&orderIds=b25ab4023%2c5e885ddd
- /v1/inclusion-preconf/cancel-order?accountId=128&instrumentId=ETH-PC-1012051&orderId=b25ab402
- /v1/inclusion-preconf/markets
- /v1/inclusion-preconf/order&instrumentId=ETH-PC-9884031&accountId=128&side=1&orderType=2&clientOrderId=05d61624&passive=false&price=0.01&quantity=10000
- /v1/p/bundles
- /v1/p/bundles?slot=2870227
- /v1/p/inclusion-preconf/top-sales?instrumentId=ETH-PC-475423&limit=10
- /v1/p/inclusion-preconf/trades?instrumentId=ETH-PC-988403
- /v1/p/wholeblock/orders?instrumentId=ETH-WB-9884031&onbook=false&done=false&limit=10
- /v1/pricer/inclusion-preconf/orders?accountId=123&instrumentId=abc&pending=true&limit=20
- /v1/pricer/inclusion-preconf/positions?instrumentId=123&accountId=456
- /v1/pricer/wholeblock/orders?accountId=123&instrumentId=abc&pending=true&limit=20
- /v1/pricer/wholeblock/positions?instrumentId=123&accountId=456
- /v1/user/delegate/pricer?enable=true
- /v1/user/inclusion-preconf/all-orders?limit=10
- /v1/user/inclusion-preconf/market/update?instrumentId=ETH-PC-475423&reservedQty=1000
- /v1/user/inclusion-preconf/positions?instrumentId=ETH-PC-9884031&limit=10
- /v1/user/inclusion-preconf/txs?instrumentId=ETH-PC-9884031&limit=100
- /v1/validator/deregister?publicKey=0x123423abcdef1234567890abcdef1234567890,0x3459871234567890abcdef1234567890abcdef1234567890
- /v1/validator/fees?publicKey=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
- /v1/validator/onchain/payout?enable=0
- /v1/validator/register?publicKey=0x123423abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
- /v1/validator/settings?collateralPerSlot=1.0
- /v1/validator/verify?publicKey=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef&signature=0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890
- /v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051
- /v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051&orderIds=b25ab4023%2c5e885dd
- /v1/wholeblock/cancel-batch-oders
- /v1/wholeblock/cancel-order?accountId=128&instrumentId=ETH-WB-1012051&orderId=b25ab402
- /v1/wholeblock/markets
- /v1/wholeblock/order&instrumentId=ETH-WB-9884031&accountId=128&side=1&orderType=2&clientOrderId=05d61624&passive=false&price=0.01

## Missing Headings (h1-h3)

- account positions query
- block builder update
- candlesticks query
- channel
- current block builder query
- current slot query
- environments
- fees
- get /api/v1/account/slot/bundles
- get /api/v1/builder/delegation
- get /api/v1/builder/signingmessage
- get /api/v1/p/builder/{slot}
- get /api/v1/p/builders
- get /api/v1/p/funding/contractaddress
- get /api/v1/p/funding/withdraw/dailywithdrawlimits
- get /api/v1/p/inclusion-preconf/market
- get /api/v1/p/inclusion-preconf/markets
- get /api/v1/p/inclusion-preconf/top-sales
- get /api/v1/p/inclusion-preconf/trades
- get /api/v1/p/network
- get /api/v1/p/tokens
- get /api/v1/p/user/fees
- get /api/v1/p/validators
- get /api/v1/p/wholeblock/markets
- get /api/v1/p/wholeblock/orders
- get /api/v1/p/wholeblock/positions
- get /api/v1/p/wholeblock/trades
- get /api/v1/pricer/account-tokens
- get /api/v1/pricer/inclusion-preconf/orders
- get /api/v1/pricer/inclusion-preconf/positions
- get /api/v1/pricer/markets/active
- get /api/v1/pricer/wholeblock/orders
- get /api/v1/pricer/wholeblock/positions
- get /api/v1/slot/bundles
- get /api/v1/slot/forceemptyblockspace
- get /api/v1/user/account/txs
- get /api/v1/user/account/{accountid}
- get /api/v1/user/account/{accountid}/txs
- get /api/v1/user/accounts
- get /api/v1/user/builder
- get /api/v1/user/delegate/builder
- get /api/v1/user/funding/deposits
- get /api/v1/user/funding/withdraw/status
- get /api/v1/user/funding/withdraws
- get /api/v1/user/inclusion-preconf/all-orders
- get /api/v1/user/inclusion-preconf/orders
- get /api/v1/user/inclusion-preconf/positions
- get /api/v1/user/inclusion-preconf/txs
- get /api/v1/user/info
- get /api/v1/user/pricer
- get /api/v1/user/validators
- get /api/v1/user/wholeblock/all-orders
- get /api/v1/user/wholeblock/orders
- get /api/v1/user/wholeblock/positions
- get /api/v1/user/wholeblock/txs
- get /api/v1/validator/fees
- get /api/v1/validator/onchain/payout
- inclusion preconf top sales query
- introduction
- message structure
- open orders query
- order books query
- post /api/v1/builder/deregister
- post /api/v1/builder/register
- post /api/v1/inclusion-preconf/cancel-all-orders
- post /api/v1/inclusion-preconf/cancel-batch-orders
- post /api/v1/inclusion-preconf/cancel-order
- post /api/v1/inclusion-preconf/order
- post /api/v1/user/account/transfer/token
- post /api/v1/user/bundle/send
- post /api/v1/user/collateralperslot
- post /api/v1/user/delegate/builder
- post /api/v1/user/delegate/pricer
- post /api/v1/user/funding/withdraw
- post /api/v1/user/inclusion-preconf/market/update
- post /api/v1/user/login
- post /api/v1/user/login/refresh
- post /api/v1/user/login/verify
- post /api/v1/user/logout
- post /api/v1/user/payoutaddress
- post /api/v1/user/update
- post /api/v1/validator/deregister
- post /api/v1/validator/register
- post /api/v1/validator/settings
- post /api/v1/validator/verify
- post /api/v1/wholeblock/cancel-all-orders
- post /api/v1/wholeblock/cancel-batch-orders
- post /api/v1/wholeblock/cancel-order
- post /api/v1/wholeblock/order
- preconf bundle update
- preconf bundles query
- preconf markets query
- private channel
- private query
- public channel
- public query
- recent trades query
- subscribe
- tokens
- unsubscribe
- welcome

