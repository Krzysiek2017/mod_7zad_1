import uuid from 'uuid';

const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function createComment(text) {
	return {
		type: CREATE_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

function removeComment(text) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
}