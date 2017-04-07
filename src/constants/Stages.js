import {
	FIELD_BACKGROUND_EMPTY,
	FIELD_BACKGROUND_TARGET
} from './Sokoban'

let e = FIELD_BACKGROUND_EMPTY
let t = FIELD_BACKGROUND_TARGET

export const STAGES = [
	{
		background: [
			//0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 0
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 1
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 2
			['', '', '', '', '', '', '', '', '', e , e , e , '', '', '', '', '', '', '', ''],	// 3
			['', '', '', '', '', '', '', '', '', e , e , t , '', '', '', '', '', '', '', ''],	// 4
			['', '', '', '', '', '', '', '', '', e , e , t , '', '', '', '', '', '', '', ''],	// 5
			['', '', '', '', '', '', '', '', '', e , e , e , '', '', '', '', '', '', '', ''],	// 6
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 7
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 8
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 9
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 10
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 11
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 12
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 13
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 14
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 15
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 16
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 17
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 18
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']	// 19
		],
		init: {
			you: [5,9],
			boxes: [
				[4,10],
				[5,10]
			]
		}
	},
	{
		background: [
			//0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 0
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 1
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 2
			['', '', '', '', '', e , e , e , '', '', '', '', '', '', '', '', '', '', '', ''],	// 3
			['', '', '', '', '', e , e , e , '', '', '', '', '', '', '', '', '', '', '', ''],	// 4
			['', '', '', '', '', e , e , e , '', '', '', '', '', '', '', '', '', '', '', ''],	// 5
			['', '', '', e , e , e , e , e , e , '', '', '', '', '', '', '', '', '', '', ''],	// 6
			['', '', '', e , '', e , '', '', e , '', '', '', '', '', '', '', '', '', '', ''],	// 7
			['', e , e , e , '', e , '', '', e , '', '', '', '', '', e , e , t , t , '', ''],	// 8
			['', e , e , e , e , e , e , e , e , e , e , e , e , e , e , e , t , t , '', ''],	// 9
			['', '', '', '', '', e , '', '', '', e , '', '', e , '', e , e , t , t , '', ''],	// 10
			['', '', '', '', '', e , e , e , e , e , '', '', '', '', '', '', '', '', '', ''],	// 11
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 12
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 13
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 14
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 15
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 16
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 17
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 18
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']	// 19			
		],
		init: {
			you: [10,12],
			boxes: [
				[4,5],
				[5,7],
				[6,5],
				[6,7],				
				[9,5],
				[9,2]				
			]
		}
	},
	{
		background: [
			//0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 0
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 1
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 2
			['', '', '', '', t , t , e , e , '', e , e , e , e , e , '', '', '', '', '', ''],	// 3
			['', '', '', '', t , t , e , e , '', e , e , e , e , e , e , e , '', '', '', ''],	// 4
			['', '', '', '', t , t , e , e , '', e , '', '', '', '', e , e , '', '', '', ''],	// 5
			['', '', '', '', t , t , e , e , e , e , e , e , '', '', e , e , '', '', '', ''],	// 6
			['', '', '', '', t , t , e , e , '', e , '', e , e , e , e , '', '', '', '', ''],	// 7
			['', '', '', '', '', '', '', '', '', e , '', '', e , e , e , e , '', '', '', ''],	// 8
			['', '', '', '', '', '', e , e , e , e , e , e , e , e , e , e , '', '', '', ''],	// 9
			['', '', '', '', '', '', e , e , e , e , '', e , e , e , e , e , '', '', '', ''],	// 10
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 11
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 12
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 13
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 14
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 15
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 16
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 17
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 18	
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']	// 19
		],
		init: {
			you: [6,10],
			boxes: [
				[4,10],
				[4,13],
				[5,9],
				[7,13],
				[8,12],
				[8,14],
				[9,7],
				[9,10],
				[9,12],
				[9,14]
			]
		}
	},
	{
		background: [
			//0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 0
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 1		
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 2
			['', '', '', '', '', '', '', '', '', '', e , e , e , e , e , e , '', '', '', ''],	// 3
			['', '', '', '', '', '', '', '', '', '', e , e , '', e , e , '', '', '', '', ''],	// 4
			['', '', '', '', '', '', '', '', '', '', e , e , e , e , e , '', '', '', '', ''],	// 5
			['', '', '', '', '', '', '', '', '', '', '', e , e , e , e , '', '', '', '', ''],	// 6
			['', '', '', '', '', '', '', '', '', '', e , e , e , '', e , '', '', '', '', ''],	// 7
			['', '', t , t , t , t , e , e , '', '', e , e , e , e , e , e , e , '', '', ''],	// 8
			['', '', '', t , t , t , e , e , e , e , e , e , e , e , e , e , e , '', '', ''],	// 9
			['', '', t , t , t , t , e , e , '', '', '', '', '', '', '', '', '', '', '', ''],	// 10
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 11
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 12
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 13
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 14
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 15
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 16
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 17
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 18
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']	// 19
		],
		init: {
			you: [3,15],
			boxes: [
				[4,11],
				[4,13],
				[5,11],
				[5,14],
				[6,11],
				[6,13],
				[7,11],
				[8,11],
				[8,14],
				[9,10],
				[9,13]
			]
		}
	},
	{
		background: [
			//0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 0
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 1
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 2
			['', '', '', '', '', '', '', '', '', '', '', '', e , e , t , t , t , t , '', ''],	// 3
			['', '', '', '', '', '', '', '', '', '', '', '', e , e , t , t , t , t , '', ''],	// 4
			['', e , e , e , e , '', e , e , e , e , e , e , e , e , t , t , t , t , '', ''],	// 5
			['', e , e , e , e , '', e , e , e , e , e , '', e , e , t , t , t , t , '', ''],	// 6
			['', e , e , e , e , e , e , e , e , e , e , '', e , e , t , t , t , t , '', ''],	// 7
			['', e , e , e , e , '', e , e , e , e , e , '', '', '', '', '', '', '', '', ''],	// 8
			['', e , e , e , e , '', e , e , e , e , e , '', '', '', '', '', '', '', '', ''],	// 9
			['', '', e , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 10
			['', e , e , e , e , '', e , e , e , e , '', '', '', '', '', '', '', '', '', ''],	// 11
			['', e , e , e , e , e , e , e , e , e , '', '', '', '', '', '', '', '', '', ''],	// 12
			['', e , e , e , e , '', e , e , e , e , e , '', '', '', '', '', '', '', '', ''],	// 13
			['', e , e , e , e , '', e , e , e , e , '', '', '', '', '', '', '', '', '', ''],	// 14
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 15
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 16
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 17
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 18
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 19	
		],
		init: {
			you: [13,10],
			boxes: [
				[5,8],
				[5,10],
				[6,2],
				[6,3],
				[6,4],
				[6,6],
				[6,9],
				[7,3],
				[7,9],
				[8,2],
				[8,3],
				[8,6],
				[8,8],
				[8,10],
				[9,3],
				[12,6],
				[13,3],
				[13,4],
				[13,6],
				[13,7],
			]
		}
	},
	{
		background: [
			//0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 0
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 1
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 2
			['', '', e , e , e , e , '', e , e , e , e , e , '', e , e , '', e , e , '', ''],	// 3
			['', '', e , e , e , e , e , '', e , e , '', e , e , e , e , e , e , e , '', ''],	// 4
			['', '', '', e , '', e , e , e , e , e , e , '', e , '', e , e , e , e , '', ''],	// 5
			['', '', e , e , e , e , '', e , '', e , e , e , e , e , e , '', e , '', '', ''],	// 6
			['', '', e , e , '', e , e , e , e , '', e , '', e , e , '', e , t , e , '', ''],	// 7
			['', '', '', e , e , e , '', e , e , e , e , e , '', e , e , e , e , e , '', ''],	// 8
			['', '', e , e , '', e , e , e , '', e , '', e , e , e , '', e , '', e , '', ''],	// 9
			['', '', e , e , e , '', e , e , e , e , e , '', e , '', e , e , e , e , '', ''],	// 10
			['', '', '', e , '', e , e , '', e , '', e , e , e , e , e , e , e , '', '', ''],	// 11
			['', '', e , e , e , e , '', e , e , e , e , e , e , '', e , e , '', e , '', ''],	// 12
			['', '', e , '', e , e , e , e , e , e , '', e , e , e , '', e , e , e , '', ''],	// 13
			['', '', e , e , e , '', e , e , '', e , e , e , '', e , e , e , '', e , '', ''],	// 14
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 15
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 16
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 17
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 18
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 19	
		],
		init: {
			you: [7,2],
			boxes: [
				[9,9]
			]
		}
	}	
]

/*
// EMPTY BACKGROUND
//0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 0
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 1
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 2
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 3
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 4
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 5
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 6
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 7
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 8
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 9
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 10
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 11
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 12
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 13
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 14
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 15
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 16
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 17
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 18
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],	// 19	
*/