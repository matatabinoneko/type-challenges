// type Includes<T extends readonly any[], U> = T[number] extends Exclude<T[number], U> ? false : true

// type Includes<T extends readonly any[], U> = [Exclude<(U extends T[number] ? U : never), never>] extends [never] ? false : true
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false
type IsEqual<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? IsEqual<First, U> extends true ? true : Includes<Rest, U>
    : false
