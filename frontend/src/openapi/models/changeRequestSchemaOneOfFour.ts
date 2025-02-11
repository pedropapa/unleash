/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestFeatureSchema } from './changeRequestFeatureSchema';
import type { ChangeRequestSegmentChangeSchema } from './changeRequestSegmentChangeSchema';
import type { ChangeRequestApprovalSchema } from './changeRequestApprovalSchema';
import type { ChangeRequestCommentSchema } from './changeRequestCommentSchema';
import type { ChangeRequestSchemaOneOfFourCreatedBy } from './changeRequestSchemaOneOfFourCreatedBy';
import type { ChangeRequestSchemaOneOfFourState } from './changeRequestSchemaOneOfFourState';
import type { ChangeRequestScheduleSchema } from './changeRequestScheduleSchema';

export type ChangeRequestSchemaOneOfFour = {
    /** This change requests's ID. */
    id: number;
    /** A title describing the change request's content. */
    title?: string;
    /** The environment in which the changes should be applied. */
    environment: string;
    /** The minimum number of approvals required before this change request can be applied. */
    minApprovals: number;
    /** The project this change request belongs to. */
    project: string;
    /** The list of features and their changes that relate to this change request. */
    features: ChangeRequestFeatureSchema[];
    /** The list of segments and their changes that relate to this change request. */
    segments: ChangeRequestSegmentChangeSchema[];
    /** A list of approvals that this change request has received. */
    approvals?: ChangeRequestApprovalSchema[];
    /** A list of rejections that this change request has received.  */
    rejections?: ChangeRequestApprovalSchema[];
    /** All comments that have been made on this change request. */
    comments?: ChangeRequestCommentSchema[];
    /** The user who created this change request. */
    createdBy: ChangeRequestSchemaOneOfFourCreatedBy;
    /** When this change request was created. */
    createdAt: string;
    /** The current state of the change request. */
    state: ChangeRequestSchemaOneOfFourState;
    schedule: ChangeRequestScheduleSchema;
};
