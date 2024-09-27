(module
  (type (;0;) (func (result i32)))
  (type (;1;) (func))
  (type (;2;) (func (param i32) (result i64)))
  (type (;3;) (func (param i32)))
  (type (;4;) (func (param i32) (result i32)))
  (func (;0;) (type 1)
    nop)
  (func (;1;) (type 2) (param i32) (result i64)
    (local i64 i32)
    i64.const 1
    local.set 1
    local.get 0
    i32.const 1
    i32.gt_u
    if  ;; label = @1
      i32.const 2
      local.set 2
      loop  ;; label = @2
        local.get 1
        local.get 2
        i64.extend_i32_u
        i64.mul
        local.set 1
        local.get 2
        i32.const 1
        i32.add
        local.tee 2
        local.get 0
        i32.le_u
        br_if 0 (;@2;)
      end
    end
    local.get 1)
  (func (;2;) (type 0) (result i32)
    global.get 0)
  (func (;3;) (type 3) (param i32)
    local.get 0
    global.set 0)
  (func (;4;) (type 4) (param i32) (result i32)
    global.get 0
    local.get 0
    i32.sub
    i32.const -16
    i32.and
    local.tee 0
    global.set 0
    local.get 0)
  (func (;5;) (type 0) (result i32)
    i32.const 1024)
  (table (;0;) 2 2 funcref)
  (memory (;0;) 256 256)
  (global (;0;) (mut i32) (i32.const 5243920))
  (export "memory" (memory 0))
  (export "factorial" (func 1))
  (export "_initialize" (func 0))
  (export "__indirect_function_table" (table 0))
  (export "__errno_location" (func 5))
  (export "stackSave" (func 2))
  (export "stackRestore" (func 3))
  (export "stackAlloc" (func 4))
  (elem (;0;) (i32.const 1) func 0))
