# LendingProgram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The lending program type, e.g. &#x60;bankSponsoredChargeCardProgram&#x60;. The set of program types is open-ended and is not enumerated here. | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**LendingProgramAttributes**](LendingProgramAttributes.md) |  | [default to undefined]

## Example

```typescript
import { LendingProgram } from '@unit-finance/unit-node-sdk';

const instance: LendingProgram = {
    type,
    id,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
