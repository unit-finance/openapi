# ListTransactions200ResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CreditAccountAttributes**](CreditAccountAttributes.md) |  | 
**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_transactions200_response_included_inner import ListTransactions200ResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransactions200ResponseIncludedInner from a JSON string
list_transactions200_response_included_inner_instance = ListTransactions200ResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(ListTransactions200ResponseIncludedInner.to_json())

# convert the object into a dict
list_transactions200_response_included_inner_dict = list_transactions200_response_included_inner_instance.to_dict()
# create an instance of ListTransactions200ResponseIncludedInner from a dict
list_transactions200_response_included_inner_from_dict = ListTransactions200ResponseIncludedInner.from_dict(list_transactions200_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


