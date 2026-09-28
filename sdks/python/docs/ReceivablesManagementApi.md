# unit_finance_sdk.ReceivablesManagementApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_receivable_by_id**](ReceivablesManagementApi.md#get_receivable_by_id) | **GET** /receivables/{id} | Get receivable by id
[**list_receivables**](ReceivablesManagementApi.md#list_receivables) | **GET** /receivables | List receivables


# **get_receivable_by_id**
> GetReceivableById200Response get_receivable_by_id(id)

Get receivable by id

Get a receivable resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_receivable_by_id200_response import GetReceivableById200Response
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
    api_instance = unit_finance_sdk.ReceivablesManagementApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get receivable by id
        api_response = api_instance.get_receivable_by_id(id)
        print("The response of ReceivablesManagementApi->get_receivable_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReceivablesManagementApi->get_receivable_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**GetReceivableById200Response**](GetReceivableById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A receivable resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_receivables**
> ListReceivables200Response list_receivables(page_limit=page_limit, page_offset=page_offset, filter_customer_id=filter_customer_id, filter_receivable_type=filter_receivable_type, filter_repayment_status_type=filter_repayment_status_type, filter_purchase_due_date=filter_purchase_due_date, filter_days_until_purchase=filter_days_until_purchase)

List receivables

List receivables resources. Paging can be applied.

The same endpoint also serves the receivables balance report: when `filter[purchaseDueDate]` or `filter[daysUntilPurchase]` is supplied, the response `data` is a single receivables balance resource holding the receivables balance that is due to be purchased by the specified date, or within the specified number of days from today.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_receivables200_response import ListReceivables200Response
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
    api_instance = unit_finance_sdk.ReceivablesManagementApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_receivable_type = 'filter_receivable_type_example' # str | Optional. Filters the results by one of the following receivable types [\"bankReceivable\", \"orgReceivable\", \"capitalPartnerReceivable\"] (optional)
    filter_repayment_status_type = 'filter_repayment_status_type_example' # str | Optional. Filters the results by one of the following repayment status types [\"notRepaid\", \"partiallyRepaid\", \"fullyRepaid\"] (optional)
    filter_purchase_due_date = 'filter_purchase_due_date_example' # str | Optional. Filters the results by the specified purchase due date e.g. 2023-05-25. When supplied, a receivables balance resource is returned instead of an array of receivables. (optional)
    filter_days_until_purchase = 'filter_days_until_purchase_example' # str | Optional. Filters the results by days until purchase. When supplied, a receivables balance resource is returned instead of an array of receivables. (optional)

    try:
        # List receivables
        api_response = api_instance.list_receivables(page_limit=page_limit, page_offset=page_offset, filter_customer_id=filter_customer_id, filter_receivable_type=filter_receivable_type, filter_repayment_status_type=filter_repayment_status_type, filter_purchase_due_date=filter_purchase_due_date, filter_days_until_purchase=filter_days_until_purchase)
        print("The response of ReceivablesManagementApi->list_receivables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReceivablesManagementApi->list_receivables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_receivable_type** | **str**| Optional. Filters the results by one of the following receivable types [\&quot;bankReceivable\&quot;, \&quot;orgReceivable\&quot;, \&quot;capitalPartnerReceivable\&quot;] | [optional] 
 **filter_repayment_status_type** | **str**| Optional. Filters the results by one of the following repayment status types [\&quot;notRepaid\&quot;, \&quot;partiallyRepaid\&quot;, \&quot;fullyRepaid\&quot;] | [optional] 
 **filter_purchase_due_date** | **str**| Optional. Filters the results by the specified purchase due date e.g. 2023-05-25. When supplied, a receivables balance resource is returned instead of an array of receivables. | [optional] 
 **filter_days_until_purchase** | **str**| Optional. Filters the results by days until purchase. When supplied, a receivables balance resource is returned instead of an array of receivables. | [optional] 

### Return type

[**ListReceivables200Response**](ListReceivables200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of receivable resources, or a receivables balance resource when a balance-report filter is supplied. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

