package com.unit.finance.sdk.it;

import com.unit.finance.sdk.model.AddressType;
import com.unit.finance.sdk.model.AnnualIncomeType;
import com.unit.finance.sdk.model.ArchiveCustomerData;
import com.unit.finance.sdk.model.ArchiveCustomerDataAttributes;
import com.unit.finance.sdk.model.ArchiveCustomerRequest;
import com.unit.finance.sdk.model.BeneficialOwnerRequestType;
import com.unit.finance.sdk.model.BusinessAnnualRevenueType;
import com.unit.finance.sdk.model.BusinessContactType;
import com.unit.finance.sdk.model.BusinessNumberOfEmployeesType;
import com.unit.finance.sdk.model.BusinessVerticalType;
import com.unit.finance.sdk.model.CashFlowType;
import com.unit.finance.sdk.model.CancelApplicationData;
import com.unit.finance.sdk.model.CancelApplicationDataAttributes;
import com.unit.finance.sdk.model.CancelApplicationRequest;
import com.unit.finance.sdk.model.CloseAccountRequest;
import com.unit.finance.sdk.model.CloseDepositAccountData;
import com.unit.finance.sdk.model.CloseDepositAccountDataAttributes;
import com.unit.finance.sdk.model.CloseDepositAccountRequest;
import com.unit.finance.sdk.model.CreateABookPaymentData;
import com.unit.finance.sdk.model.CreateABookPaymentDataAttributes;
import com.unit.finance.sdk.model.CreateABookPaymentDataRelationships;
import com.unit.finance.sdk.model.CreateABookPaymentRequest;
import com.unit.finance.sdk.model.CreateAccountHoldData;
import com.unit.finance.sdk.model.CreateAccountHoldDataAttributes;
import com.unit.finance.sdk.model.CreateAccountHoldRequest;
import com.unit.finance.sdk.model.CreateAccountRequest;
import com.unit.finance.sdk.model.CreateCheckDepositData;
import com.unit.finance.sdk.model.CreateCheckDepositDataAttributes;
import com.unit.finance.sdk.model.CreateCheckDepositRequest;
import com.unit.finance.sdk.model.CreateCheckDepositSendLinkData;
import com.unit.finance.sdk.model.CreateCheckDepositSendLinkDataAttributes;
import com.unit.finance.sdk.model.CreateCheckDepositSendLinkDataRelationships;
import com.unit.finance.sdk.model.CreateCheckDepositSendLinkRequest;
import com.unit.finance.sdk.model.UpdateCheckDepositRequest;
import com.unit.finance.sdk.model.UpdateData;
import com.unit.finance.sdk.model.UpdateDataAttributes;
import com.unit.finance.sdk.model.CreateBatchReleasesData;
import com.unit.finance.sdk.model.CreateBatchReleasesDataAttributes;
import com.unit.finance.sdk.model.CreateBatchReleasesRequest;
import com.unit.finance.sdk.model.CreateBulkPaymentRequest;
import com.unit.finance.sdk.model.CreateBulkPaymentRequestDataInner;
import com.unit.finance.sdk.model.CreateBusinessApplicationData;
import com.unit.finance.sdk.model.CreateBusinessApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateBusinessApplicationRequest;
import com.unit.finance.sdk.model.CreateBusinessCreditCardDataAttributes;
import com.unit.finance.sdk.model.CreateBusinessDebitCardData;
import com.unit.finance.sdk.model.CreateBusinessDebitCardRequest;
import com.unit.finance.sdk.model.CreateBusinessVirtualDebitCardData;
import com.unit.finance.sdk.model.CreateBusinessVirtualDebitCardDataAttributes;
import com.unit.finance.sdk.model.CreateBusinessVirtualDebitCardRequest;
import com.unit.finance.sdk.model.CreateBusinessWalletCustomerData;
import com.unit.finance.sdk.model.CreateBusinessWalletCustomerDataAttributes;
import com.unit.finance.sdk.model.CreateBusinessWalletCustomerRequest;
import com.unit.finance.sdk.model.CreateCardRequest;
import com.unit.finance.sdk.model.CreateDepositAccountData;
import com.unit.finance.sdk.model.CreateDepositAccountDataAttributes;
import com.unit.finance.sdk.model.CreateDepositAccountDataRelationships;
import com.unit.finance.sdk.model.CreateDepositAccountRequest;
import com.unit.finance.sdk.model.CreateFeeData;
import com.unit.finance.sdk.model.CreateFeeDataAttributes;
import com.unit.finance.sdk.model.CreateFeeDataRelationships;
import com.unit.finance.sdk.model.CreateFeeRequest;
import com.unit.finance.sdk.model.CreateIndividualApplicationData;
import com.unit.finance.sdk.model.CreateIndividualApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateIndividualApplicationRequest;
import com.unit.finance.sdk.model.CreatePaymentRequest;
import com.unit.finance.sdk.model.CreateRecurringCreditBookPaymentData;
import com.unit.finance.sdk.model.CreateRecurringCreditBookPaymentDataAttributes;
import com.unit.finance.sdk.model.CreateRecurringCreditBookPaymentRequest;
import com.unit.finance.sdk.model.CreateRecurringPaymentRequest;
import com.unit.finance.sdk.model.CreateScheduleType;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationData;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationDataAttributes;
import com.unit.finance.sdk.model.CreateSoleProprietorApplicationRequest;
import com.unit.finance.sdk.model.FreezeAccountRequest;
import com.unit.finance.sdk.model.FreezeCardData;
import com.unit.finance.sdk.model.FreezeCardDataAttributes;
import com.unit.finance.sdk.model.FreezeCardRequest;
import com.unit.finance.sdk.model.FreezeDepositAccountData;
import com.unit.finance.sdk.model.FreezeDepositAccountDataAttributes;
import com.unit.finance.sdk.model.FreezeDepositAccountRequest;
import com.unit.finance.sdk.model.FullNameType;
import com.unit.finance.sdk.model.GenerateBarcodeData;
import com.unit.finance.sdk.model.GenerateBarcodeDataAttributes;
import com.unit.finance.sdk.model.GenerateBarcodeDataRelationships;
import com.unit.finance.sdk.model.GenerateCashDepositBarcodeRequest;
import com.unit.finance.sdk.model.GetExpectedACHCompletionDateData;
import com.unit.finance.sdk.model.GetExpectedACHCompletionDateDataAttributes;
import com.unit.finance.sdk.model.GetExpectedAchCompletionDateRequest;
import com.unit.finance.sdk.model.OccupationType;
import com.unit.finance.sdk.model.OfficerRequestType;
import com.unit.finance.sdk.model.PhoneType;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.RelationshipData;
import com.unit.finance.sdk.model.ReleaseAccountHoldData;
import com.unit.finance.sdk.model.ReleaseAccountHoldDataAttributes;
import com.unit.finance.sdk.model.ReleaseAccountHoldRequest;
import com.unit.finance.sdk.model.ReplaceCardData;
import com.unit.finance.sdk.model.ReplaceCardDataAttributes;
import com.unit.finance.sdk.model.ReplaceCardRequest;
import com.unit.finance.sdk.model.ResourceIdentifier;
import com.unit.finance.sdk.model.ReverseFeeData;
import com.unit.finance.sdk.model.ReverseFeeDataAttributes;
import com.unit.finance.sdk.model.ReverseFeeDataRelationships;
import com.unit.finance.sdk.model.ReverseFeeRequest;
import com.unit.finance.sdk.model.SendDrawdownPaymentData;
import com.unit.finance.sdk.model.SendDrawdownPaymentDataAttributes;
import com.unit.finance.sdk.model.SendDrawdownPaymentRequest;
import com.unit.finance.sdk.model.SoleProprietorAnnualRevenueType;
import com.unit.finance.sdk.model.SoleProprietorNumberOfEmployeesType;
import com.unit.finance.sdk.model.SourceOfIncomeType;
import com.unit.finance.sdk.model.UpdateAccountRequest;
import com.unit.finance.sdk.model.UpdateApplicationRequest;
import com.unit.finance.sdk.model.UpdateBookPaymentData;
import com.unit.finance.sdk.model.UpdateBookPaymentDataAttributes;
import com.unit.finance.sdk.model.UpdateBookPaymentRequest;
import com.unit.finance.sdk.model.UpdateBookTransactionData;
import com.unit.finance.sdk.model.UpdateBookTransactionDataAttributes;
import com.unit.finance.sdk.model.UpdateBookTransactionRequest;
import com.unit.finance.sdk.model.UpdateBusinessApplicationData;
import com.unit.finance.sdk.model.UpdateBusinessApplicationDataAttributes;
import com.unit.finance.sdk.model.UpdateBusinessApplicationRequest;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerData;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerDataAttributes;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerDataRelationships;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwnerRequest;
import com.unit.finance.sdk.model.UpdateBusinessCustomerData;
import com.unit.finance.sdk.model.UpdateBusinessCustomerDataAttributes;
import com.unit.finance.sdk.model.UpdateBusinessCustomerOfficerData;
import com.unit.finance.sdk.model.UpdateBusinessCustomerOfficerDataAttributes;
import com.unit.finance.sdk.model.UpdateBusinessCustomerOfficerRequest;
import com.unit.finance.sdk.model.UpdateBusinessCustomerRequest;
import com.unit.finance.sdk.model.UpdateCardData;
import com.unit.finance.sdk.model.UpdateCardDataAttributes;
import com.unit.finance.sdk.model.UpdateCardRequest;
import com.unit.finance.sdk.model.UpdateCustomerRequest;
import com.unit.finance.sdk.model.UpdateDepositAccountData;
import com.unit.finance.sdk.model.UpdateDepositAccountDataAttributes;
import com.unit.finance.sdk.model.UpdateDepositAccountRequest;
import com.unit.finance.sdk.model.UpdatePaymentRequest;
import com.unit.finance.sdk.model.UpdateTagsData;
import com.unit.finance.sdk.model.UpdateTagsDataAttributes;
import com.unit.finance.sdk.model.UpdateTagsRequest;
import com.unit.finance.sdk.model.UpdateTransactionRequest;
import com.unit.finance.sdk.model.UpdateACHReceivedPaymentData;
import com.unit.finance.sdk.model.UpdateACHReceivedPaymentDataAttributes;
import com.unit.finance.sdk.model.UpdateACHReceivedPaymentRequest;
import com.unit.finance.sdk.model.UpdateReceivedPaymentRequest;
import com.unit.finance.sdk.model.AddAccountOwnersRequest;
import com.unit.finance.sdk.model.RemoveAccountOwnersRequest;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Request-body builders, mirroring the Node {@code tests/helpers/fixtures.ts}.
 *
 * <p>Nested JSON:API attribute objects (address, phone, fullName, contact,
 * officer, beneficialOwners) are typed model classes because the write schemas
 * reference the shared component types. Only free-form {@code tags} remain a
 * {@code Map<String, Object>}.
 */
final class Fixtures {

  private static final String RUN = ApiSupport.TEST_RUN_ID;

  private Fixtures() {}

  static Map<String, Object> map(Object... keyValues) {
    LinkedHashMap<String, Object> out = new LinkedHashMap<>();
    for (int i = 0; i < keyValues.length; i += 2) {
      out.put((String) keyValues[i], keyValues[i + 1]);
    }
    return out;
  }

  static AddressType usAddress() {
    return new AddressType()
        .street("20 Ingram St")
        .city("Forest Hills")
        .state("NY")
        .postalCode("11375")
        .country("US");
  }

  static PhoneType usPhone() {
    return new PhoneType().countryCode("1").number("5555555555");
  }

  static FullNameType fullName() {
    return new FullNameType().first("Peter").last("Parker");
  }

  static Map<String, Object> baseTags() {
    return map("testRun", RUN);
  }

  static BusinessContactType businessContact() {
    return new BusinessContactType()
        .fullName(fullName())
        .email("peter+" + RUN + "@oscorp.com")
        .phone(usPhone());
  }

  static OfficerRequestType officer() {
    return new OfficerRequestType()
        .fullName(fullName())
        .dateOfBirth("2001-08-15")
        .title("CEO")
        .ssn("721074426")
        .email("peter+" + RUN + "@oscorp.com")
        .phone(usPhone())
        .address(usAddress());
  }

  static List<BeneficialOwnerRequestType> beneficialOwners() {
    List<BeneficialOwnerRequestType> owners = new ArrayList<>();
    owners.add(
        new BeneficialOwnerRequestType()
            .fullName(new FullNameType().first("Mary Jane").last("Watson"))
            .dateOfBirth("2001-08-15")
            .ssn("574567625")
            .email("mj+" + RUN + "@oscorp.com")
            .phone(usPhone())
            .address(usAddress())
            .percentage(60));
    return owners;
  }

  static CreateBusinessApplicationRequest businessApplicationRequest() {
    CreateBusinessApplicationDataAttributes attributes =
        new CreateBusinessApplicationDataAttributes()
            .name("Pied Piper " + RUN)
            .address(usAddress())
            .phone(usPhone())
            .stateOfIncorporation("DE")
            .ein("123456789")
            .entityType("Corporation")
            .yearOfIncorporation("2020")
            .countriesOfOperation(Arrays.asList("US"))
            .businessVertical(BusinessVerticalType.TECHNOLOGY_MEDIA_OR_TELECOM)
            .website("https://www.piedpiper.com")
            .contact(businessContact())
            .officer(officer())
            .beneficialOwners(beneficialOwners())
            .annualRevenue(BusinessAnnualRevenueType.BETWEEN500K_AND1M)
            .numberOfEmployees(BusinessNumberOfEmployeesType.BETWEEN50_AND100)
            .cashFlow(CashFlowType.PREDICTABLE)
            .tags(baseTags());
    CreateBusinessApplicationData data =
        new CreateBusinessApplicationData()
            .type(CreateBusinessApplicationData.TypeEnum.BUSINESS_APPLICATION)
            .attributes(attributes);
    return new CreateBusinessApplicationRequest().data(data);
  }

  static CreateIndividualApplicationRequest individualApplicationRequest() {
    CreateIndividualApplicationDataAttributes attributes =
        new CreateIndividualApplicationDataAttributes()
            .ssn("721074426")
            .fullName(fullName())
            .dateOfBirth("2001-08-15")
            .address(usAddress())
            .phone(usPhone())
            .email("peter+" + RUN + "@oscorp.com")
            .occupation(OccupationType.ARCHITECT_OR_ENGINEER)
            .annualIncome(AnnualIncomeType.BETWEEN50K_AND100K)
            .sourceOfIncome(SourceOfIncomeType.EMPLOYMENT_OR_PAYROLL_INCOME)
            .tags(baseTags());
    CreateIndividualApplicationData data =
        new CreateIndividualApplicationData()
            .type(CreateIndividualApplicationData.TypeEnum.INDIVIDUAL_APPLICATION)
            .attributes(attributes);
    return new CreateIndividualApplicationRequest().data(data);
  }

  /**
   * Individual application that the sandbox lands in {@code AwaitingDocuments}
   * (applicant SSN {@code 000000003}), a non-terminal state that can be
   * canceled. Business applications auto-approve in the sandbox even with a
   * magic officer SSN, so the cancel flow exercises an individual applicant.
   */
  static CreateIndividualApplicationRequest cancelableIndividualApplicationRequest() {
    CreateIndividualApplicationRequest request = individualApplicationRequest();
    request.getData().getAttributes().setSsn("000000003");
    return request;
  }

  static CreateSoleProprietorApplicationRequest soleProprietorApplicationRequest() {
    CreateSoleProprietorApplicationDataAttributes attributes =
        new CreateSoleProprietorApplicationDataAttributes()
            .ssn("721074426")
            .fullName(fullName())
            .dateOfBirth("2001-08-15")
            .address(usAddress())
            .phone(usPhone())
            .email("peter+" + RUN + "@oscorp.com")
            .soleProprietorship(true)
            .ein("123456789")
            .dba("Pied Piper SP " + RUN)
            .businessVertical(BusinessVerticalType.TECHNOLOGY_MEDIA_OR_TELECOM)
            .annualRevenue(SoleProprietorAnnualRevenueType.BETWEEN100K_AND200K)
            .numberOfEmployees(SoleProprietorNumberOfEmployeesType.BETWEEN2_AND5)
            .website("https://www.piedpiper.com")
            .tags(baseTags());
    CreateSoleProprietorApplicationData data =
        new CreateSoleProprietorApplicationData()
            .type(CreateSoleProprietorApplicationData.TypeEnum.INDIVIDUAL_APPLICATION)
            .attributes(attributes);
    return new CreateSoleProprietorApplicationRequest().data(data);
  }

  static UpdateApplicationRequest updateBusinessApplicationRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateBusinessApplicationDataAttributes attributes =
        new UpdateBusinessApplicationDataAttributes().tags(tags);
    UpdateBusinessApplicationData data =
        new UpdateBusinessApplicationData()
            .type(UpdateBusinessApplicationData.TypeEnum.BUSINESS_APPLICATION)
            .attributes(attributes);
    return new UpdateApplicationRequest(new UpdateBusinessApplicationRequest().data(data));
  }

  static UpdateBusinessBeneficialOwnerRequest updateBusinessBeneficialOwnerRequest(
      String applicationId) {
    UpdateBusinessBeneficialOwnerDataAttributes attributes =
        new UpdateBusinessBeneficialOwnerDataAttributes().occupation(OccupationType.ARCHITECT_OR_ENGINEER);
    UpdateBusinessBeneficialOwnerDataRelationships relationships =
        new UpdateBusinessBeneficialOwnerDataRelationships()
            .application(
                new Relationship()
                    .data(
                        new RelationshipData(
                            new ResourceIdentifier()
                                .type("businessApplication")
                                .id(applicationId))));
    UpdateBusinessBeneficialOwnerData data =
        new UpdateBusinessBeneficialOwnerData()
            .type(UpdateBusinessBeneficialOwnerData.TypeEnum.BENEFICIAL_OWNER)
            .attributes(attributes)
            .relationships(relationships);
    return new UpdateBusinessBeneficialOwnerRequest().data(data);
  }

  static CancelApplicationRequest cancelApplicationRequest() {
    CancelApplicationDataAttributes attributes =
        new CancelApplicationDataAttributes().reason("By user request via SDK integration test");
    CancelApplicationData data =
        new CancelApplicationData()
            .type(CancelApplicationData.TypeEnum.APPLICATION_CANCEL)
            .attributes(attributes);
    return new CancelApplicationRequest().data(data);
  }

  static Relationship relationship(String type, String id) {
    return new Relationship()
        .data(new RelationshipData(new ResourceIdentifier().type(type).id(id)));
  }

  static CreateDepositAccountRequest createDepositAccountRequest(String customerId) {
    CreateDepositAccountDataAttributes attributes =
        new CreateDepositAccountDataAttributes().depositProduct("checking").tags(baseTags());
    CreateDepositAccountDataRelationships relationships =
        new CreateDepositAccountDataRelationships().customer(relationship("customer", customerId));
    CreateDepositAccountData data =
        new CreateDepositAccountData()
            .type(CreateDepositAccountData.TypeEnum.DEPOSIT_ACCOUNT)
            .attributes(attributes)
            .relationships(relationships);
    return new CreateDepositAccountRequest().data(data);
  }

  static CreateAccountRequest depositAccountRequestForCustomer(String customerId) {
    return new CreateAccountRequest(createDepositAccountRequest(customerId));
  }

  static UpdateAccountRequest updateDepositAccountRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateDepositAccountDataAttributes attributes =
        new UpdateDepositAccountDataAttributes().tags(tags);
    UpdateDepositAccountData data =
        new UpdateDepositAccountData()
            .type(UpdateDepositAccountData.TypeEnum.DEPOSIT_ACCOUNT)
            .attributes(attributes);
    return new UpdateAccountRequest(new UpdateDepositAccountRequest().data(data));
  }

  static CloseAccountRequest closeDepositAccountRequest() {
    CloseDepositAccountDataAttributes attributes =
        new CloseDepositAccountDataAttributes().reason("ByCustomer");
    CloseDepositAccountData data =
        new CloseDepositAccountData()
            .type(CloseDepositAccountData.TypeEnum.DEPOSIT_ACCOUNT_CLOSE)
            .attributes(attributes);
    return new CloseAccountRequest(new CloseDepositAccountRequest().data(data));
  }

  static FreezeAccountRequest freezeDepositAccountRequest() {
    FreezeDepositAccountDataAttributes attributes =
        new FreezeDepositAccountDataAttributes()
            .reason("Other")
            .reasonText("SDK integration test freeze");
    FreezeDepositAccountData data =
        new FreezeDepositAccountData()
            .type(FreezeDepositAccountData.TypeEnum.ACCOUNT_FREEZE)
            .attributes(attributes);
    return new FreezeAccountRequest(new FreezeDepositAccountRequest().data(data));
  }

  static CreateFeeRequest createFeeRequest(String accountId) {
    CreateFeeDataAttributes attributes =
        new CreateFeeDataAttributes()
            .amount(100)
            .description("SDK integration test fee")
            .tags(baseTags());
    CreateFeeDataRelationships relationships =
        new CreateFeeDataRelationships().account(relationship("account", accountId));
    CreateFeeData data =
        new CreateFeeData()
            .type(CreateFeeData.TypeEnum.FEE)
            .attributes(attributes)
            .relationships(relationships);
    return new CreateFeeRequest().data(data);
  }

  static ReverseFeeRequest reverseFeeRequest(String accountId, String transactionId) {
    ReverseFeeDataAttributes attributes =
        new ReverseFeeDataAttributes()
            .description("SDK integration test fee reversal")
            .tags(baseTags());
    ReverseFeeDataRelationships relationships =
        new ReverseFeeDataRelationships()
            .account(relationship("account", accountId))
            .transaction(relationship("transaction", transactionId));
    ReverseFeeData data =
        new ReverseFeeData()
            .type(ReverseFeeData.TypeEnum.FEE_REVERSAL)
            .attributes(attributes)
            .relationships(relationships);
    return new ReverseFeeRequest().data(data);
  }

  // The spec marks `idempotencyKey` optional on both hold requests, but the
  // sandbox rejects them with a 400 unless it is present. Each call gets a
  // fresh key so that separately-built holds are never collapsed into one
  // another.
  static CreateAccountHoldRequest createAccountHoldRequest(String accountId) {
    CreateAccountHoldDataAttributes attributes =
        new CreateAccountHoldDataAttributes()
            .amount(500)
            .description("SDK integration test hold")
            .idempotencyKey(ApiSupport.TEST_RUN_ID + "-hold-" + UUID.randomUUID());
    CreateAccountHoldData data =
        new CreateAccountHoldData()
            .type(CreateAccountHoldData.TypeEnum.ACCOUNT_HOLD)
            .attributes(attributes)
            .relationships(new CreateFeeDataRelationships().account(relationship("account", accountId)));
    return new CreateAccountHoldRequest().data(data);
  }

  // A check deposit is created against an existing account; `amount` and
  // `description` are the only required attributes. The account relationship
  // uses the generic "account" resource type (matching the hold/fee fixtures).
  static CreateCheckDepositRequest createCheckDepositRequest(String accountId) {
    CreateCheckDepositDataAttributes attributes =
        new CreateCheckDepositDataAttributes()
            .amount(20000)
            .description("SDK integration test check deposit")
            .tags(baseTags());
    CreateCheckDepositData data =
        new CreateCheckDepositData()
            .type(CreateCheckDepositData.TypeEnum.CHECK_DEPOSIT)
            .attributes(attributes)
            .relationships(new CreateFeeDataRelationships().account(relationship("account", accountId)));
    return new CreateCheckDepositRequest().data(data);
  }

  // updateCheckDeposit only exposes `tags` (and the optional
  // clearingDaysOverride); `tags` is required on the update envelope.
  static UpdateCheckDepositRequest updateCheckDepositRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateData data =
        new UpdateData()
            .type(UpdateData.TypeEnum.CHECK_DEPOSIT)
            .attributes(new UpdateDataAttributes().tags(tags));
    return new UpdateCheckDepositRequest().data(data);
  }

  // The send-link component requires a white-label theme and an authorized user
  // alongside the account. Sandbox orgs without those resources reject the
  // call, so the suite treats a validation error as a feature-unavailable skip.
  static CreateCheckDepositSendLinkRequest createCheckDepositSendLinkRequest(
      String accountId, String whiteLabelThemeId, String authorizedUserId) {
    CreateCheckDepositSendLinkDataAttributes attributes =
        new CreateCheckDepositSendLinkDataAttributes()
            .qrCode(true)
            .idempotencyKey(ApiSupport.TEST_RUN_ID + "-send-link-" + UUID.randomUUID());
    CreateCheckDepositSendLinkDataRelationships relationships =
        new CreateCheckDepositSendLinkDataRelationships()
            .whiteLabelTheme(relationship("whiteLabelTheme", whiteLabelThemeId))
            .account(relationship("account", accountId))
            .authorizedUser(relationship("authorizedUser", authorizedUserId));
    CreateCheckDepositSendLinkData data =
        new CreateCheckDepositSendLinkData()
            .type(CreateCheckDepositSendLinkData.TypeEnum.SEND_LINK_FOR_CHECK_DEPOSIT_COMPONENT)
            .attributes(attributes)
            .relationships(relationships);
    return new CreateCheckDepositSendLinkRequest().data(data);
  }

  static ReleaseAccountHoldRequest releaseAccountHoldRequest(int amount) {
    ReleaseAccountHoldDataAttributes attributes = new ReleaseAccountHoldDataAttributes().amount(amount);
    ReleaseAccountHoldData data =
        new ReleaseAccountHoldData()
            .type(ReleaseAccountHoldData.TypeEnum.ACCOUNT_HOLD)
            .attributes(attributes);
    return new ReleaseAccountHoldRequest().data(data);
  }

  static CreatePaymentRequest createBookPaymentRequest(
      String accountId, String counterpartyAccountId) {
    CreateABookPaymentDataAttributes attributes =
        new CreateABookPaymentDataAttributes()
            .amount(100)
            .description("SDK integration test book payment")
            .tags(baseTags());
    CreateABookPaymentDataRelationships relationships =
        new CreateABookPaymentDataRelationships()
            .account(relationship("account", accountId))
            .counterpartyAccount(relationship("account", counterpartyAccountId));
    CreateABookPaymentData data =
        new CreateABookPaymentData()
            .type(CreateABookPaymentData.TypeEnum.BOOK_PAYMENT)
            .attributes(attributes)
            .relationships(relationships);
    return new CreatePaymentRequest(new CreateABookPaymentRequest().data(data));
  }

  static CreateBulkPaymentRequest createBulkPaymentRequest(
      String accountId, String counterpartyAccountId) {
    CreateABookPaymentDataAttributes attributes =
        new CreateABookPaymentDataAttributes()
            .amount(100)
            .description("SDK integration test book payment")
            .tags(baseTags());
    CreateABookPaymentDataRelationships relationships =
        new CreateABookPaymentDataRelationships()
            .account(relationship("account", accountId))
            .counterpartyAccount(relationship("account", counterpartyAccountId));
    CreateABookPaymentData data =
        new CreateABookPaymentData()
            .type(CreateABookPaymentData.TypeEnum.BOOK_PAYMENT)
            .attributes(attributes)
            .relationships(relationships);
    return new CreateBulkPaymentRequest()
        .addDataItem(new CreateBulkPaymentRequestDataInner(data));
  }

  static UpdatePaymentRequest updateBookPaymentRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateBookPaymentDataAttributes attributes = new UpdateBookPaymentDataAttributes().tags(tags);
    UpdateBookPaymentData data =
        new UpdateBookPaymentData()
            .type(UpdateBookPaymentData.TypeEnum.BOOK_PAYMENT)
            .attributes(attributes);
    return new UpdatePaymentRequest(new UpdateBookPaymentRequest().data(data));
  }

  // PATCH /accounts/{accountId}/transactions/{transactionId} accepts a generic
  // tags-update envelope (type `transaction`) regardless of the underlying
  // transaction variant, so a single builder covers every transaction kind.
  static UpdateTagsRequest updateTransactionTagsRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateTagsDataAttributes attributes = new UpdateTagsDataAttributes().tags(tags);
    UpdateTagsData data =
        new UpdateTagsData().type(UpdateTagsData.TypeEnum.TRANSACTION).attributes(attributes);
    return new UpdateTagsRequest().data(data);
  }

  // PATCH /transactions/{transactionId} is discriminated by data.type; the
  // bookTransaction variant requires the owning account relationship alongside
  // the updatable summary/tags attributes.
  static UpdateTransactionRequest updateBookTransactionRequest(String accountId) {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateBookTransactionDataAttributes attributes =
        new UpdateBookTransactionDataAttributes()
            .summary("SDK integration test book transaction update")
            .tags(tags);
    UpdateBookTransactionData data =
        new UpdateBookTransactionData()
            .type(UpdateBookTransactionData.TypeEnum.BOOK_TRANSACTION)
            .attributes(attributes)
            .relationships(new CreateFeeDataRelationships().account(relationship("account", accountId)));
    return new UpdateTransactionRequest(new UpdateBookTransactionRequest().data(data));
  }

  static GetExpectedAchCompletionDateRequest getExpectedAchCompletionDateRequest(String accountId) {
    GetExpectedACHCompletionDateDataAttributes attributes =
        new GetExpectedACHCompletionDateDataAttributes().direction("Credit").amount(1000);
    GetExpectedACHCompletionDateData data =
        new GetExpectedACHCompletionDateData()
            .type(GetExpectedACHCompletionDateData.TypeEnum.ACH_EXPECTED_COMPLETION_DATE)
            .attributes(attributes)
            .relationships(new CreateFeeDataRelationships().account(relationship("account", accountId)));
    return new GetExpectedAchCompletionDateRequest().data(data);
  }

  static CreateRecurringPaymentRequest createRecurringBookPaymentRequest(
      String accountId, String counterpartyAccountId) {
    LocalDate start = LocalDate.now(ZoneOffset.UTC).plusDays(7);
    LocalDate end = start.plusMonths(3);
    // The schedule's startTime/endTime are date-only ("2022-06-29"), but the
    // generated model types them as OffsetDateTime (spec declares date-time),
    // which serializes with a time component the sandbox rejects with
    // `should match format "date"`. Emit the date-only strings through the
    // additionalProperties escape hatch instead of the typed setters.
    CreateScheduleType schedule =
        new CreateScheduleType()
            .interval("Monthly")
            .dayOfMonth(15);
    schedule.putAdditionalProperty("startTime", start.toString());
    schedule.putAdditionalProperty("endTime", end.toString());
    CreateRecurringCreditBookPaymentDataAttributes attributes =
        new CreateRecurringCreditBookPaymentDataAttributes()
            .amount(100)
            .description("SDK integration test recurring payment")
            .schedule(schedule)
            .tags(baseTags());
    CreateABookPaymentDataRelationships relationships =
        new CreateABookPaymentDataRelationships()
            .account(relationship("account", accountId))
            .counterpartyAccount(relationship("account", counterpartyAccountId));
    CreateRecurringCreditBookPaymentData data =
        new CreateRecurringCreditBookPaymentData()
            .type(CreateRecurringCreditBookPaymentData.TypeEnum.RECURRING_CREDIT_BOOK_PAYMENT)
            .attributes(attributes)
            .relationships(relationships);
    return new CreateRecurringPaymentRequest(new CreateRecurringCreditBookPaymentRequest().data(data));
  }

  static UpdateReceivedPaymentRequest updateReceivedPaymentRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateACHReceivedPaymentDataAttributes attributes =
        new UpdateACHReceivedPaymentDataAttributes().tags(tags);
    UpdateACHReceivedPaymentData data =
        new UpdateACHReceivedPaymentData()
            .type(UpdateACHReceivedPaymentData.TypeEnum.ACH_RECEIVED_PAYMENT)
            .attributes(attributes);
    return new UpdateReceivedPaymentRequest(new UpdateACHReceivedPaymentRequest().data(data));
  }

  static GenerateCashDepositBarcodeRequest generateCashDepositBarcodeRequest(
      String customerId, String accountId, String storeId) {
    GenerateBarcodeDataAttributes attributes = new GenerateBarcodeDataAttributes().storeId(storeId);
    GenerateBarcodeDataRelationships relationships =
        new GenerateBarcodeDataRelationships()
            .customer(relationship("customer", customerId))
            // The cash-deposit-barcode account relationship must use the generic
            // "account" resource type; the sandbox rejects "depositAccount" here
            // with a 400 on /data/relationships/account/data/type.
            .account(relationship("account", accountId));
    GenerateBarcodeData data =
        new GenerateBarcodeData()
            .type(GenerateBarcodeData.TypeEnum.CASH_DEPOSIT_BARCODE)
            .attributes(attributes)
            .relationships(relationships);
    return new GenerateCashDepositBarcodeRequest().data(data);
  }

  // A business debit card is a physical card issued against a deposit account.
  // The card holder's identity mirrors the officer fixture used elsewhere.
  static CreateCardRequest createBusinessDebitCardRequest(String accountId) {
    CreateBusinessCreditCardDataAttributes attributes =
        new CreateBusinessCreditCardDataAttributes()
            .fullName(fullName())
            .dateOfBirth(LocalDate.parse("2001-08-15"))
            .address(usAddress())
            .phone(usPhone())
            .email("peter+" + RUN + "@oscorp.com")
            .ssn("721074426")
            .tags(baseTags());
    CreateBusinessDebitCardData data =
        new CreateBusinessDebitCardData()
            .type(CreateBusinessDebitCardData.TypeEnum.BUSINESS_DEBIT_CARD)
            .attributes(attributes)
            .relationships(new CreateFeeDataRelationships().account(relationship("account", accountId)));
    return new CreateCardRequest(new CreateBusinessDebitCardRequest().data(data));
  }

  // A business virtual debit card is issued Active immediately (physical cards
  // land in Inactive until activated). Operations that require an Active card --
  // getCardPinStatus, reportCardLost, reportCardStolen -- run against a virtual
  // card. Virtual cards cannot be replaced (physical only).
  static CreateCardRequest createBusinessVirtualDebitCardRequest(String accountId) {
    CreateBusinessVirtualDebitCardDataAttributes attributes =
        new CreateBusinessVirtualDebitCardDataAttributes()
            .fullName(fullName())
            .dateOfBirth(LocalDate.parse("2001-08-15"))
            .address(usAddress())
            .phone(usPhone())
            .email("peter+" + RUN + "@oscorp.com")
            .ssn("721074426")
            .tags(baseTags());
    CreateBusinessVirtualDebitCardData data =
        new CreateBusinessVirtualDebitCardData()
            .type(CreateBusinessVirtualDebitCardData.TypeEnum.BUSINESS_VIRTUAL_DEBIT_CARD)
            .attributes(attributes)
            .relationships(new CreateFeeDataRelationships().account(relationship("account", accountId)));
    return new CreateCardRequest(new CreateBusinessVirtualDebitCardRequest().data(data));
  }

  // UpdateCardDataAttributes only exposes card-holder contact fields (tags are
  // not updatable on a card), so the update touches the card holder's phone.
  static UpdateCardRequest updateCardRequest() {
    UpdateCardDataAttributes attributes =
        new UpdateCardDataAttributes().phone(new PhoneType().countryCode("1").number("5555555556"));
    UpdateCardData data =
        new UpdateCardData()
            .type(UpdateCardData.TypeEnum.BUSINESS_DEBIT_CARD)
            .attributes(attributes);
    return new UpdateCardRequest().data(data);
  }

  static FreezeCardRequest freezeCardRequest() {
    FreezeCardDataAttributes attributes =
        new FreezeCardDataAttributes().reason("SDK integration test freeze");
    FreezeCardData data =
        new FreezeCardData().type(FreezeCardData.TypeEnum.FREEZE_CARD).attributes(attributes);
    return new FreezeCardRequest().data(data);
  }

  static ReplaceCardRequest replaceCardRequest() {
    ReplaceCardDataAttributes attributes = new ReplaceCardDataAttributes().shippingAddress(usAddress());
    ReplaceCardData data =
        new ReplaceCardData().type(ReplaceCardData.TypeEnum.REPLACE_CARD).attributes(attributes);
    return new ReplaceCardRequest().data(data);
  }

  // A business wallet customer is created directly (no application flow). The
  // sandbox requires the full attribute set from the spec: bank partner name,
  // business name, address, EIN, vertical and employee-count bucket.
  static CreateBusinessWalletCustomerRequest createBusinessWalletCustomerRequest() {
    CreateBusinessWalletCustomerDataAttributes attributes =
        new CreateBusinessWalletCustomerDataAttributes()
            // bankName must be one of the sandbox's partner-bank names
            // (Piermont, Blue Ridge, Pacific West, MVB, Choice Financial Group,
            // Thread, Lincoln Savings, Emprise, TransPecos, Vantage).
            .bankName("Thread")
            .businessName("Pied Piper Wallet " + RUN)
            .address(usAddress())
            .ein("123456789")
            .businessVertical(BusinessVerticalType.TECHNOLOGY_MEDIA_OR_TELECOM)
            .numberOfEmployees(BusinessNumberOfEmployeesType.BETWEEN50_AND100)
            .tags(baseTags());
    CreateBusinessWalletCustomerData data =
        new CreateBusinessWalletCustomerData()
            .type(CreateBusinessWalletCustomerData.TypeEnum.BUSINESS_WALLET_CUSTOMER)
            .attributes(attributes);
    return new CreateBusinessWalletCustomerRequest().data(data);
  }

  // updateCustomer is discriminated by data.type; the businessCustomer variant
  // only touches tags here so the shared business customer is left otherwise
  // intact for downstream suites.
  static UpdateCustomerRequest updateBusinessCustomerRequest() {
    Map<String, Object> tags = baseTags();
    tags.put("updated", "true");
    UpdateBusinessCustomerDataAttributes attributes =
        new UpdateBusinessCustomerDataAttributes().tags(tags);
    UpdateBusinessCustomerData data =
        new UpdateBusinessCustomerData()
            .type(UpdateBusinessCustomerData.TypeEnum.BUSINESS_CUSTOMER)
            .attributes(attributes);
    return new UpdateCustomerRequest(new UpdateBusinessCustomerRequest().data(data));
  }

  static ArchiveCustomerRequest archiveCustomerRequest() {
    ArchiveCustomerDataAttributes attributes = new ArchiveCustomerDataAttributes().reason("Inactive");
    ArchiveCustomerData data =
        new ArchiveCustomerData()
            .type(ArchiveCustomerData.TypeEnum.CUSTOMER_ARCHIVE)
            .attributes(attributes);
    return new ArchiveCustomerRequest().data(data);
  }

  static UpdateBusinessCustomerOfficerRequest updateBusinessCustomerOfficerRequest() {
    UpdateBusinessCustomerOfficerDataAttributes attributes =
        new UpdateBusinessCustomerOfficerDataAttributes()
            .occupation(OccupationType.ARCHITECT_OR_ENGINEER);
    UpdateBusinessCustomerOfficerData data =
        new UpdateBusinessCustomerOfficerData()
            .type(UpdateBusinessCustomerOfficerData.TypeEnum.OFFICER)
            .attributes(attributes);
    return new UpdateBusinessCustomerOfficerRequest().data(data);
  }

  static AddAccountOwnersRequest addAccountOwnersRequest(List<String> customerIds) {
    List<ResourceIdentifier> data =
        customerIds.stream()
            .map(id -> new ResourceIdentifier().type("customer").id(id))
            .collect(Collectors.toList());
    return new AddAccountOwnersRequest().data(data);
  }

  static RemoveAccountOwnersRequest removeAccountOwnersRequest(List<String> customerIds) {
    List<ResourceIdentifier> data =
        customerIds.stream()
            .map(id -> new ResourceIdentifier().type("customer").id(id))
            .collect(Collectors.toList());
    return new RemoveAccountOwnersRequest().data(data);
  }

  static AddressType addressType() {
    return usAddress();
  }

  static CreateBatchReleasesRequest createBatchReleasesRequest() {
    CreateBatchReleasesDataAttributes attributes =
        new CreateBatchReleasesDataAttributes()
            .amount(100)
            .description("SDK integration test batch release")
            .senderName("SDK Test Sender")
            .senderAddress(addressType())
            .senderAccountNumber("123456789012345")
            .tags(baseTags());
    CreateBatchReleasesData data =
        new CreateBatchReleasesData()
            .type(CreateBatchReleasesData.TypeEnum.BATCH_RELEASE)
            .attributes(attributes);
    return new CreateBatchReleasesRequest().data(data);
  }

  static SendDrawdownPaymentRequest sendDrawdownPaymentRequest() {
    SendDrawdownPaymentDataAttributes attributes =
        new SendDrawdownPaymentDataAttributes()
            .idempotencyKey("sdk-java-drawdown-" + RUN)
            .tags(baseTags());
    SendDrawdownPaymentData data =
        new SendDrawdownPaymentData()
            .type(SendDrawdownPaymentData.TypeEnum.SEND_WIRE_DRAWDOWN)
            .attributes(attributes);
    return new SendDrawdownPaymentRequest().data(data);
  }
}
