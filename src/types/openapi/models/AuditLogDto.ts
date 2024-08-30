// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Audit log items
 * @export
 * @interface AuditLogDto
 */
export interface AuditLogDto {
    /**
     * Audit log Id
     * @type {number}
     * @memberof AuditLogDto
     */
    id: number;
    /**
     * Audit log UUID
     * @type {string}
     * @memberof AuditLogDto
     */
    uuid: string;
    /**
     * Requestor of the change
     * @type {string}
     * @memberof AuditLogDto
     */
    author: string;
    /**
     * Time when the audit log is registered
     * @type {string}
     * @memberof AuditLogDto
     */
    created: string;
    /**
     * Status of the operation. Either success or failed
     * @type {string}
     * @memberof AuditLogDto
     */
    operationStatus: AuditLogDtoOperationStatusEnum;
    /**
     * Module triggered the action
     * @type {string}
     * @memberof AuditLogDto
     */
    origination: AuditLogDtoOriginationEnum;
    /**
     * Module affected by the operation
     * @type {string}
     * @memberof AuditLogDto
     */
    affected: AuditLogDtoAffectedEnum;
    /**
     * Object identifier
     * @type {string}
     * @memberof AuditLogDto
     */
    objectIdentifier: string;
    /**
     * Type of operation performed
     * @type {string}
     * @memberof AuditLogDto
     */
    operation: AuditLogDtoOperationEnum;
    /**
     * @type {string}
     * @memberof AuditLogDto
     */
    additionalData?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum AuditLogDtoOperationStatusEnum {
    Success = 'SUCCESS',
    Failure = 'FAILURE'
}
/**
 * @export
 * @enum {string}
 */
export enum AuditLogDtoOriginationEnum {
    Access = 'ACCESS',
    RaProfile = 'RA_PROFILE',
    Client = 'CLIENT',
    Administrator = 'ADMINISTRATOR',
    Fe = 'FE',
    Be = 'BE',
    Ca = 'CA',
    EndEntity = 'END_ENTITY',
    EndEntityProfile = 'END_ENTITY_PROFILE',
    EndEntityCertificate = 'END_ENTITY_CERTIFICATE',
    AuditLog = 'AUDIT_LOG',
    Attributes = 'ATTRIBUTES',
    CaInstance = 'CA_INSTANCE',
    NotificationInstance = 'NOTIFICATION_INSTANCE',
    Credential = 'CREDENTIAL',
    Connector = 'CONNECTOR',
    Discovery = 'DISCOVERY',
    Health = 'HEALTH',
    Entity = 'ENTITY',
    Group = 'GROUP',
    Certificate = 'CERTIFICATE',
    Statistics = 'STATISTICS',
    AcmeProfile = 'ACME_PROFILE',
    Approval = 'APPROVAL',
    ApprovalProfile = 'APPROVAL_PROFILE',
    AcmeAccount = 'ACME_ACCOUNT',
    ScepProfile = 'SCEP_PROFILE',
    CmpProfile = 'CMP_PROFILE',
    ComplianceProfile = 'COMPLIANCE_PROFILE',
    ComplianceRule = 'COMPLIANCE_RULE',
    ComplianceGroup = 'COMPLIANCE_GROUP',
    Localhost = 'LOCALHOST',
    TokenProfile = 'TOKEN_PROFILE',
    TokenInstance = 'TOKEN_INSTANCE',
    CryptographicKey = 'CRYPTOGRAPHIC_KEY',
    CryptographicOperations = 'CRYPTOGRAPHIC_OPERATIONS',
    Scheduler = 'SCHEDULER'
}
/**
 * @export
 * @enum {string}
 */
export enum AuditLogDtoAffectedEnum {
    Access = 'ACCESS',
    RaProfile = 'RA_PROFILE',
    Client = 'CLIENT',
    Administrator = 'ADMINISTRATOR',
    Fe = 'FE',
    Be = 'BE',
    Ca = 'CA',
    EndEntity = 'END_ENTITY',
    EndEntityProfile = 'END_ENTITY_PROFILE',
    EndEntityCertificate = 'END_ENTITY_CERTIFICATE',
    AuditLog = 'AUDIT_LOG',
    Attributes = 'ATTRIBUTES',
    CaInstance = 'CA_INSTANCE',
    NotificationInstance = 'NOTIFICATION_INSTANCE',
    Credential = 'CREDENTIAL',
    Connector = 'CONNECTOR',
    Discovery = 'DISCOVERY',
    Health = 'HEALTH',
    Entity = 'ENTITY',
    Group = 'GROUP',
    Certificate = 'CERTIFICATE',
    Statistics = 'STATISTICS',
    AcmeProfile = 'ACME_PROFILE',
    Approval = 'APPROVAL',
    ApprovalProfile = 'APPROVAL_PROFILE',
    AcmeAccount = 'ACME_ACCOUNT',
    ScepProfile = 'SCEP_PROFILE',
    CmpProfile = 'CMP_PROFILE',
    ComplianceProfile = 'COMPLIANCE_PROFILE',
    ComplianceRule = 'COMPLIANCE_RULE',
    ComplianceGroup = 'COMPLIANCE_GROUP',
    Localhost = 'LOCALHOST',
    TokenProfile = 'TOKEN_PROFILE',
    TokenInstance = 'TOKEN_INSTANCE',
    CryptographicKey = 'CRYPTOGRAPHIC_KEY',
    CryptographicOperations = 'CRYPTOGRAPHIC_OPERATIONS',
    Scheduler = 'SCHEDULER'
}
/**
 * @export
 * @enum {string}
 */
export enum AuditLogDtoOperationEnum {
    Create = 'CREATE',
    Delete = 'DELETE',
    Change = 'CHANGE',
    Enable = 'ENABLE',
    Disable = 'DISABLE',
    Auth = 'AUTH',
    Request = 'REQUEST',
    Issue = 'ISSUE',
    Renew = 'RENEW',
    Revoke = 'REVOKE',
    Reset = 'RESET',
    Start = 'START',
    Stop = 'STOP',
    Validate = 'VALIDATE',
    Callback = 'CALLBACK',
    Connect = 'CONNECT',
    ForceDelete = 'FORCE_DELETE',
    Encrypt = 'ENCRYPT',
    Decrypt = 'DECRYPT',
    Sign = 'SIGN',
    Verify = 'VERIFY',
    Approve = 'APPROVE',
    Reject = 'REJECT',
    Update = 'UPDATE'
}

