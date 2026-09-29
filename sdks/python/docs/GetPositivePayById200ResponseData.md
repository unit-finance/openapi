# GetPositivePayById200ResponseData

The Positive Pay rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WireDrawdownPositivePayAttributes**](WireDrawdownPositivePayAttributes.md) |  | 
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.get_positive_pay_by_id200_response_data import GetPositivePayById200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetPositivePayById200ResponseData from a JSON string
get_positive_pay_by_id200_response_data_instance = GetPositivePayById200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetPositivePayById200ResponseData.to_json())

# convert the object into a dict
get_positive_pay_by_id200_response_data_dict = get_positive_pay_by_id200_response_data_instance.to_dict()
# create an instance of GetPositivePayById200ResponseData from a dict
get_positive_pay_by_id200_response_data_from_dict = GetPositivePayById200ResponseData.from_dict(get_positive_pay_by_id200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


