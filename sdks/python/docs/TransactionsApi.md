# unit_finance_sdk.TransactionsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_transaction**](TransactionsApi.md#get_transaction) | **GET** /accounts/{accountId}/transactions/{transactionId} | Get a transaction
[**list_transactions**](TransactionsApi.md#list_transactions) | **GET** /transactions | List transactions
[**update_transaction**](TransactionsApi.md#update_transaction) | **PATCH** /transactions/{transactionId} | Update a transaction
[**update_transaction_tags**](TransactionsApi.md#update_transaction_tags) | **PATCH** /accounts/{accountId}/transactions/{transactionId} | Update transaction tags


# **get_transaction**
> GetTransaction200Response get_transaction(account_id, transaction_id, filter_customer_id=filter_customer_id, include=include)

Get a transaction

Get a transaction by transaction id and account id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_transaction200_response import GetTransaction200Response
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
    api_instance = unit_finance_sdk.TransactionsApi(api_client)
    account_id = 'account_id_example' # str | 
    transaction_id = 'transaction_id_example' # str | 
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the result by the specified customer id. (optional)
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources (optional)

    try:
        # Get a transaction
        api_response = api_instance.get_transaction(account_id, transaction_id, filter_customer_id=filter_customer_id, include=include)
        print("The response of TransactionsApi->get_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->get_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **transaction_id** | **str**|  | 
 **filter_customer_id** | **str**| Optional. Filters the result by the specified customer id. | [optional] 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] 

### Return type

[**GetTransaction200Response**](GetTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Transaction resource. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_transactions**
> ListTransactions200Response list_transactions(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_account_ids=filter_account_ids, filter_customer_id=filter_customer_id, filter_query=filter_query, filter_tags=filter_tags, filter_since=filter_since, filter_until=filter_until, filter_card_id=filter_card_id, filter_type=filter_type, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, filter_direction=filter_direction, filter_exclude_fees=filter_exclude_fees, filter_account_type=filter_account_type, sort=sort, include=include)

List transactions

List transaction resources. Filtering and sorting can be applied. Paging is available only when filtering by customer id or account id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_transactions200_response import ListTransactions200Response
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
    api_instance = unit_finance_sdk.TransactionsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_account_ids = 'filter_account_ids_example' # str | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]=10000&filter[accountIds][1]=10001* (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_query = 'filter_query_example' # str | Optional. search term according to the Full-Text Search Rules. (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter Transactions by Tags. (optional)
    filter_since = 'filter_since_example' # str | Optional. Filters the Transactions that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters the Transactions that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z (optional)
    filter_card_id = 'filter_card_id_example' # str | Optional. Filters the results by the specified card id. (optional)
    filter_type = 'filter_type_example' # str | Optional. Filter Transactions by Transaction type. Possible values include: OriginatedAch, ReceivedAch, ReturnedAch, DishonoredAch, Book, Purchase, Atm, Fee, Reversal, CardTransaction, BatchRelease, Wire, ReturnedWire, Dispute, Adjustment, Interest, Reward, CheckDeposit, ReturnedCheckDeposit, PaymentCanceled, CustomerRepayment. Usage example: *filter[type][0]=OriginatedAch&filter[type][1]=ReceivedAch* (optional)
    filter_from_amount = 'filter_from_amount_example' # str | Optional. Filters the Transactions that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional)
    filter_to_amount = 'filter_to_amount_example' # str | Optional. Filters the Transactions that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional)
    filter_direction = 'filter_direction_example' # str | Optional. Filter Transactions by direction (Debit, Credit). Usage example: *filter[direction][0]=Debit* (optional)
    filter_exclude_fees = 'filter_exclude_fees_example' # str | Optional. Filter Fee type Transactions. (optional)
    filter_account_type = 'filter_account_type_example' # str | Optional. Filter Transactions by account type (deposit, credit). (optional)
    sort = 'createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to 'createdAt')
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources (optional)

    try:
        # List transactions
        api_response = api_instance.list_transactions(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_account_ids=filter_account_ids, filter_customer_id=filter_customer_id, filter_query=filter_query, filter_tags=filter_tags, filter_since=filter_since, filter_until=filter_until, filter_card_id=filter_card_id, filter_type=filter_type, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, filter_direction=filter_direction, filter_exclude_fees=filter_exclude_fees, filter_account_type=filter_account_type, sort=sort, include=include)
        print("The response of TransactionsApi->list_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->list_transactions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_account_ids** | **str**| Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]&#x3D;10000&amp;filter[accountIds][1]&#x3D;10001* | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_query** | **str**| Optional. search term according to the Full-Text Search Rules. | [optional] 
 **filter_tags** | **str**| Optional. Filter Transactions by Tags. | [optional] 
 **filter_since** | **str**| Optional. Filters the Transactions that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] 
 **filter_until** | **str**| Optional. Filters the Transactions that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] 
 **filter_card_id** | **str**| Optional. Filters the results by the specified card id. | [optional] 
 **filter_type** | **str**| Optional. Filter Transactions by Transaction type. Possible values include: OriginatedAch, ReceivedAch, ReturnedAch, DishonoredAch, Book, Purchase, Atm, Fee, Reversal, CardTransaction, BatchRelease, Wire, ReturnedWire, Dispute, Adjustment, Interest, Reward, CheckDeposit, ReturnedCheckDeposit, PaymentCanceled, CustomerRepayment. Usage example: *filter[type][0]&#x3D;OriginatedAch&amp;filter[type][1]&#x3D;ReceivedAch* | [optional] 
 **filter_from_amount** | **str**| Optional. Filters the Transactions that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] 
 **filter_to_amount** | **str**| Optional. Filters the Transactions that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] 
 **filter_direction** | **str**| Optional. Filter Transactions by direction (Debit, Credit). Usage example: *filter[direction][0]&#x3D;Debit* | [optional] 
 **filter_exclude_fees** | **str**| Optional. Filter Fee type Transactions. | [optional] 
 **filter_account_type** | **str**| Optional. Filter Transactions by account type (deposit, credit). | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;createdAt&#39;]
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] 

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of transaction resources. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_transaction**
> UpdateTransaction200Response update_transaction(transaction_id, update_transaction_request)

Update a transaction

Update a transaction. The request body is one of UpdateBookTransactionRequest (bookTransaction) or UpdateChargebackTransactionRequest (chargebackTransaction), discriminated by data.type.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_transaction200_response import UpdateTransaction200Response
from unit_finance_sdk.models.update_transaction_request import UpdateTransactionRequest
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
    api_instance = unit_finance_sdk.TransactionsApi(api_client)
    transaction_id = 'transaction_id_example' # str | 
    update_transaction_request = unit_finance_sdk.UpdateTransactionRequest() # UpdateTransactionRequest | 

    try:
        # Update a transaction
        api_response = api_instance.update_transaction(transaction_id, update_transaction_request)
        print("The response of TransactionsApi->update_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->update_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**|  | 
 **update_transaction_request** | [**UpdateTransactionRequest**](UpdateTransactionRequest.md)|  | 

### Return type

[**UpdateTransaction200Response**](UpdateTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Transaction resource. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_transaction_tags**
> UpdateTransaction200Response update_transaction_tags(account_id, transaction_id, update_tags_request)

Update transaction tags

Update Tags Transaction.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_tags_request import UpdateTagsRequest
from unit_finance_sdk.models.update_transaction200_response import UpdateTransaction200Response
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
    api_instance = unit_finance_sdk.TransactionsApi(api_client)
    account_id = 'account_id_example' # str | 
    transaction_id = 'transaction_id_example' # str | 
    update_tags_request = unit_finance_sdk.UpdateTagsRequest() # UpdateTagsRequest | 

    try:
        # Update transaction tags
        api_response = api_instance.update_transaction_tags(account_id, transaction_id, update_tags_request)
        print("The response of TransactionsApi->update_transaction_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionsApi->update_transaction_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **transaction_id** | **str**|  | 
 **update_tags_request** | [**UpdateTagsRequest**](UpdateTagsRequest.md)|  | 

### Return type

[**UpdateTransaction200Response**](UpdateTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Transaction resource. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

