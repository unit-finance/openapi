# CheckDepositAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | One of AwaitingImages, AwaitingFrontImage, AwaitingBackImage, Pending, PendingReview, Rejected, Clearing, Sent, Canceled, Returned. | 
**reason** | **str** | More information about the status. | [optional] 
**description** | **str** | Check Deposit description (maximum of 50 characters). | 
**amount** | **str** | The amount (cents) of the check deposit. | 
**check_number** | **str** | The serial number printed at the bottom of the check | [optional] 
**counterparty** | [**CheckCounterpartyType**](CheckCounterpartyType.md) | The party the check belongs to. | [optional] 
**clearing_days_override** | **int** | The amount of days it will take a check deposit to clear if a clearingDaysOverride was provided. See Dynamic Clearing Period | [optional] 
**settlement_date** | **datetime** | Optional, For Pending or Clearing, shows the date on which the check will be settled. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.check_deposit_attributes import CheckDepositAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDepositAttributes from a JSON string
check_deposit_attributes_instance = CheckDepositAttributes.from_json(json)
# print the JSON string representation of the object
print(CheckDepositAttributes.to_json())

# convert the object into a dict
check_deposit_attributes_dict = check_deposit_attributes_instance.to_dict()
# create an instance of CheckDepositAttributes from a dict
check_deposit_attributes_from_dict = CheckDepositAttributes.from_dict(check_deposit_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


