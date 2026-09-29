# unit_finance_sdk.InterestApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_total_accrued_interest**](InterestApi.md#get_total_accrued_interest) | **GET** /accrued-interest/total | Get total accrued interest


# **get_total_accrued_interest**
> GetTotalAccruedInterest200Response get_total_accrued_interest(filter_account_id=filter_account_id, filter_since=filter_since, filter_until=filter_until, filter_since_interest_month=filter_since_interest_month, filter_until_interest_month=filter_until_interest_month)

Get total accrued interest

The response to this API call includes the sum of customer accrued interest (in cents) for a given period of time.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_total_accrued_interest200_response import GetTotalAccruedInterest200Response
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
    api_instance = unit_finance_sdk.InterestApi(api_client)
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_since = 'filter_since_example' # str | Optional. Filters the accrued interest *after* the specified date. e.g. 2024-01-13T16:01:19.346Z (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters the account accrued interest *before* the specified date. e.g. 2024-05-06T16:01:00.123Z (optional)
    filter_since_interest_month = 'filter_since_interest_month_example' # str | Optional. Filters the accrued interest *after* the specified month. e.g. 2024-03 (optional)
    filter_until_interest_month = 'filter_until_interest_month_example' # str | Optional. Filters the accrued interest *before* the specified month. e.g. 2024-07 (optional)

    try:
        # Get total accrued interest
        api_response = api_instance.get_total_accrued_interest(filter_account_id=filter_account_id, filter_since=filter_since, filter_until=filter_until, filter_since_interest_month=filter_since_interest_month, filter_until_interest_month=filter_until_interest_month)
        print("The response of InterestApi->get_total_accrued_interest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InterestApi->get_total_accrued_interest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_since** | **str**| Optional. Filters the accrued interest *after* the specified date. e.g. 2024-01-13T16:01:19.346Z | [optional] 
 **filter_until** | **str**| Optional. Filters the account accrued interest *before* the specified date. e.g. 2024-05-06T16:01:00.123Z | [optional] 
 **filter_since_interest_month** | **str**| Optional. Filters the accrued interest *after* the specified month. e.g. 2024-03 | [optional] 
 **filter_until_interest_month** | **str**| Optional. Filters the accrued interest *before* the specified month. e.g. 2024-07 | [optional] 

### Return type

[**GetTotalAccruedInterest200Response**](GetTotalAccruedInterest200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Total accrued interest. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

