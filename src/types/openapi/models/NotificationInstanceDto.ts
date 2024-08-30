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

import type {
    AttributeMappingDto,
    ResponseAttributeDto,
} from './';

/**
 * @export
 * @interface NotificationInstanceDto
 */
export interface NotificationInstanceDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof NotificationInstanceDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof NotificationInstanceDto
     */
    name: string;
    /**
     * Notification instance description
     * @type {string}
     * @memberof NotificationInstanceDto
     */
    description?: string;
    /**
     * UUID of Notification provider
     * @type {string}
     * @memberof NotificationInstanceDto
     */
    connectorUuid: string;
    /**
     * Name of Notification provider
     * @type {string}
     * @memberof NotificationInstanceDto
     */
    connectorName: string;
    /**
     * Notification Instance Kind
     * @type {string}
     * @memberof NotificationInstanceDto
     */
    kind: string;
    /**
     * List of Notification instance Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof NotificationInstanceDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * List of attribute mappings between mapping attributes and (recipient) custom attributes
     * @type {Array<AttributeMappingDto>}
     * @memberof NotificationInstanceDto
     */
    attributeMappings?: Array<AttributeMappingDto>;
}
