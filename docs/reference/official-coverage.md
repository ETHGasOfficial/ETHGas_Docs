---
sidebar_position: 90
---

# Official Coverage Notes

This page captures information present in the official Ethgas docs that is not
yet integrated into the main endpoint pages in this repo. It is sourced from
the official HTML snapshot in `.crawl_official/change-log.html`.

## Endpoints referenced without `/p`

These appear in official tables/notes without the `/p` prefix:

- `GET /v1/inclusion-preconf/markets`
- `GET /v1/wholeblock/markets`

## Commented official endpoint

The official HTML contains a commented-out section for a public bundles
endpoint:

### `GET /v1/p/bundles`

**HTTP example**

```bash
curl -X GET /v1/p/bundles?slot=2870227
```

**Python example**

```python
import requests

url = "https://mainnet.app.ethgas.com/p/bundles"

params = {
  "slot": 2870227,
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
```

**Example response**

```json
{
    "success": true,
    "data": {
        "slot": 2870227,
        "bundles": [
            {
                "txs": [
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "createDate": 1730193765339
                    },
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "createDate": 1730193765339
                    }
                ],
                "uuid": "ab592371-84d6-459e-95e7-5edad485f282",
                "averageBidPrice": 1.2635975E-8
            }
        ]
    }
}
```

## Typos present in official examples

The official HTML includes these misspellings in example URLs:

- `POST /v1/inclusion-preconf/cancel-batch-oders`
- `POST /v1/inclusion-preconf/cancel-all-oders`
- `POST /v1/wholeblock/cancel-batch-oders`

## Missing example requests (official → repo)

These example requests appear in the official docs but are not mirrored in
this repo yet:

- `GET /v1/inclusion-preconf/markets`
- `GET /v1/p/bundles`
- `GET /v1/p/bundles?slot=2870227`
- `GET /v1/p/inclusion-preconf/top-sales?instrumentId=ETH-PC-475423&limit=10`
- `GET /v1/p/inclusion-preconf/trades?instrumentId=ETH-PC-988403`
- `GET /v1/p/wholeblock/orders?instrumentId=ETH-WB-9884031&onbook=false&done=false&limit=10`
- `GET /v1/pricer/inclusion-preconf/orders?accountId=123&instrumentId=abc&pending=true&limit=20`
- `GET /v1/pricer/inclusion-preconf/positions?instrumentId=123&accountId=456`
- `GET /v1/pricer/wholeblock/orders?accountId=123&instrumentId=abc&pending=true&limit=20`
- `GET /v1/pricer/wholeblock/positions?instrumentId=123&accountId=456`
- `GET /v1/user/inclusion-preconf/all-orders?limit=10`
- `GET /v1/user/inclusion-preconf/positions?instrumentId=ETH-PC-9884031&limit=10`
- `GET /v1/user/inclusion-preconf/txs?instrumentId=ETH-PC-9884031&limit=100`
- `GET /v1/wholeblock/markets`
- `POST /v1/inclusion-preconf/cancel-all-orders?accountId=128&instrumentId=ETH-PC-1012051`
- `POST /v1/inclusion-preconf/cancel-batch-oders?accountId=128&instrumentId=ETH-PC-1012051&orderIds=b25ab4023%2c5e885ddd`
- `POST /v1/inclusion-preconf/cancel-order?accountId=128&instrumentId=ETH-PC-1012051&orderId=b25ab402`
- `POST /v1/inclusion-preconf/order&instrumentId=ETH-PC-9884031&accountId=128&side=1&orderType=2&clientOrderId=05d61624&passive=false&price=0.01&quantity=10000`
- `POST /v1/user/delegate/pricer?enable=true`
- `POST /v1/user/inclusion-preconf/market/update?instrumentId=ETH-PC-475423&reservedQty=1000`
- `POST /v1/validator/deregister?publicKey=0x123423abcdef1234567890abcdef1234567890,0x3459871234567890abcdef1234567890abcdef1234567890`
- `POST /v1/validator/register?publicKey=0x123423abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef`
- `POST /v1/validator/settings?collateralPerSlot=1.0`
- `POST /v1/validator/verify?publicKey=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef&signature=0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890`
- `POST /v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051`
- `POST /v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051&orderIds=b25ab4023%2c5e885dd`
- `POST /v1/wholeblock/cancel-order?accountId=128&instrumentId=ETH-WB-1012051&orderId=b25ab402`
- `POST /v1/wholeblock/order&instrumentId=ETH-WB-9884031&accountId=128&side=1&orderType=2&clientOrderId=05d61624&passive=false&price=0.01`

