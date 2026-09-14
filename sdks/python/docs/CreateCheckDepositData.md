# CreateCheckDepositData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCheckDepositDataAttributes**](CreateCheckDepositDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_deposit_data import CreateCheckDepositData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckDepositData from a JSON string
create_check_deposit_data_instance = CreateCheckDepositData.from_json(json)
# print the JSON string representation of the object
print(CreateCheckDepositData.to_json())

# convert the object into a dict
create_check_deposit_data_dict = create_check_deposit_data_instance.to_dict()
# create an instance of CreateCheckDepositData from a dict
create_check_deposit_data_from_dict = CreateCheckDepositData.from_dict(create_check_deposit_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


