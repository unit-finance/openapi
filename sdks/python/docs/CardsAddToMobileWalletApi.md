# unit_finance_sdk.CardsAddToMobileWalletApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_mobile_wallet_payload**](CardsAddToMobileWalletApi.md#get_mobile_wallet_payload) | **POST** /cards/{cardId}/mobile-wallet-payload | Get mobile wallet payload


# **get_mobile_wallet_payload**
> GetMobileWalletPayload200Response get_mobile_wallet_payload(card_id, get_mobile_wallet_payload_request)

Get mobile wallet payload

Get the mobile wallet encrypted payload for the specified card. The encrypted payload is unique per issuance and is required as part of the SDK integration.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_mobile_wallet_payload200_response import GetMobileWalletPayload200Response
from unit_finance_sdk.models.get_mobile_wallet_payload_request import GetMobileWalletPayloadRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.CardsAddToMobileWalletApi(api_client)
    card_id = 'card_id_example' # str | 
    get_mobile_wallet_payload_request = unit_finance_sdk.GetMobileWalletPayloadRequest() # GetMobileWalletPayloadRequest | 

    try:
        # Get mobile wallet payload
        api_response = api_instance.get_mobile_wallet_payload(card_id, get_mobile_wallet_payload_request)
        print("The response of CardsAddToMobileWalletApi->get_mobile_wallet_payload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardsAddToMobileWalletApi->get_mobile_wallet_payload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | **str**|  | 
 **get_mobile_wallet_payload_request** | [**GetMobileWalletPayloadRequest**](GetMobileWalletPayloadRequest.md)|  | 

### Return type

[**GetMobileWalletPayload200Response**](GetMobileWalletPayload200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON object containing the encrypted payload. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

