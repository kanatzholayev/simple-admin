export interface User {
	uuid: string;
	name: string;
	email: string;
	isAuthorized: boolean;
	permissions: string[];
	image: string;
}
