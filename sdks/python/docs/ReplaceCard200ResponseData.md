# ReplaceCard200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BusinessDebitCardAttributes**](BusinessDebitCardAttributes.md) |  | 
**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.replace_card200_response_data import ReplaceCard200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceCard200ResponseData from a JSON string
replace_card200_response_data_instance = ReplaceCard200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ReplaceCard200ResponseData.to_json())

# convert the object into a dict
replace_card200_response_data_dict = replace_card200_response_data_instance.to_dict()
# create an instance of ReplaceCard200ResponseData from a dict
replace_card200_response_data_from_dict = ReplaceCard200ResponseData.from_dict(replace_card200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


