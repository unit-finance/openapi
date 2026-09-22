# ListCheckPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CheckPayment]**](CheckPayment.md) |  | 
**included** | [**List[DepositAccount]**](DepositAccount.md) | Array of resources requested by the include query parameter. | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_check_payments200_response import ListCheckPayments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListCheckPayments200Response from a JSON string
list_check_payments200_response_instance = ListCheckPayments200Response.from_json(json)
# print the JSON string representation of the object
print(ListCheckPayments200Response.to_json())

# convert the object into a dict
list_check_payments200_response_dict = list_check_payments200_response_instance.to_dict()
# create an instance of ListCheckPayments200Response from a dict
list_check_payments200_response_from_dict = ListCheckPayments200Response.from_dict(list_check_payments200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


