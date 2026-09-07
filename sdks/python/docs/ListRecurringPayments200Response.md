# ListRecurringPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListRecurringPayments200ResponseDataInner]**](ListRecurringPayments200ResponseDataInner.md) |  | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_recurring_payments200_response import ListRecurringPayments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListRecurringPayments200Response from a JSON string
list_recurring_payments200_response_instance = ListRecurringPayments200Response.from_json(json)
# print the JSON string representation of the object
print(ListRecurringPayments200Response.to_json())

# convert the object into a dict
list_recurring_payments200_response_dict = list_recurring_payments200_response_instance.to_dict()
# create an instance of ListRecurringPayments200Response from a dict
list_recurring_payments200_response_from_dict = ListRecurringPayments200Response.from_dict(list_recurring_payments200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


